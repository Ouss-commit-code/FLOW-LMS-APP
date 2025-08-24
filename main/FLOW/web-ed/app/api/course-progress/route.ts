// app/api/course-progress/route.ts
import { NextResponse } from "next/server";
import { sanityFetch } from "@/sanity/lib/live";  // Adjust the import path
import { defineQuery } from "groq";
import { getStudentByClerkId } from "@/sanity/lib/student/getStudentByClerkId";
import { calculateCourseProgress } from "@/lib/courseProgress";
import { Module } from "@/sanity.types";
import { client } from "@/lib/sanity";

export async function POST(request: Request) {
  const { clerkId, courseId } = await request.json();

  // Get the student's Sanity ID
  const student = await getStudentByClerkId(clerkId);

  if (!student?._id) {
    console.log("Student not found");
    return NextResponse.json({ completedLessons: [], courseProgress: 0, isEnrolled: false });
  }

  // Check if the student is already enrolled
  const enrollmentQuery = defineQuery(
    `*[_type == "courseEnrollment" && student._ref == $studentId && course._ref == $courseId][0]`
  );
  const enrollmentResult = await sanityFetch({
    query: enrollmentQuery,
    params: { studentId: student._id, courseId },
  });
  const isEnrolled = !!enrollmentResult.data;

  // If not enrolled, create an enrollment record
  if (!isEnrolled) {
    await client.create({
      _type: "courseEnrollment",
      student: { _type: "reference", _ref: student._id },
      course: { _type: "reference", _ref: courseId },
      enrolledAt: new Date().toISOString(),
    });
    console.log(`Enrolled student ${student._id} in course ${courseId}`);
  }

  // Fetch progress
  const progressQuery = defineQuery(`{
    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && course._ref == $courseId] {
      ...,
      "lesson": lesson->{...},
      "module": module->{...}
    },
    "course": *[_type == "course" && _id == $courseId][0] {
      ...,
      "modules": modules[]-> {
        ...,
        "lessons": lessons[]-> {...}
      }
    }
  }`);

  const result = await sanityFetch({
    query: progressQuery,
    params: { studentId: student._id, courseId },
  });

  const { completedLessons = [], course } = result.data;
  const courseProgress = calculateCourseProgress(
    (course?.modules as unknown as Module[]) || null,
    completedLessons
  );

  return NextResponse.json({
    completedLessons,
    courseProgress,
    isEnrolled: true,
  });
}