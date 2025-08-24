
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "groq";


export async function getLessonCompletions(
  studentId: string,
  courseId: string
) {
  const getLessonsCompletionsQuery = defineQuery(`{
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
    query: getLessonsCompletionsQuery,
    params: { studentId, courseId },
  });

  const { course, completedLessons } = result.data;


  
  // Calculate overall course progress
  const totalLessons =
    course?.modules?.reduce(
      (acc, module) => acc + (module?.lessons?.length || 0),
      0
    ) || 0;

  const totalCompleted = completedLessons?.length || 0;
  const courseProgress =
    totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;

  return {
    completedLessons: completedLessons || [],
    courseProgress,
  };
}