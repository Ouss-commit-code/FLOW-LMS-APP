import { client } from "@/lib/sanity";

export async function isEnrolledInCourse(studentId: string, courseId: string) {
  try {
    const enrollmentQuery = `*[_type == "courseEnrollment" && student._ref == $studentId && course._ref == $courseId][0]`;
    const enrollment = await client.fetch(
      enrollmentQuery,
      { studentId, courseId },
      { cache: "no-store" }
    );

    console.log("Enrollment query:", enrollmentQuery);
    console.log("Params:", { studentId, courseId });
    console.log("Enrollment result:", enrollment);

    return !!enrollment;
  } catch (error) {
    console.error("Error checking enrollment status:", error);
    return false;
  }
}
