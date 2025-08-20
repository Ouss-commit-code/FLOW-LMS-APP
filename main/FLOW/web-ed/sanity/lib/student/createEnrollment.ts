import { client } from "../adminClient";

interface CreateEnrollmentParams {
  studentId: string;
  courseId: string;
 }

export async function createEnrollment({
  studentId,
  courseId,
  
}: CreateEnrollmentParams) {
  return client.create({
    _type: "enrollment",
    student: {
      _type: "reference",
      _ref: studentId,
    },
    course: {
      _type: "reference",
      _ref: courseId,
    },
    enrolledAt: new Date().toISOString(),
  });
}