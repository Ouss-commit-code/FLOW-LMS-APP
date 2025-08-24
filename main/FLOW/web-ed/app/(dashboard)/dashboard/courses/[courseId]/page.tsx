import getCourseById from "@/sanity/lib/courses/getCourseById";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// You'll need to create this function to check enrollment status
import { checkUserEnrollment } from "@/lib/enrollment"; // Create this

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  
  // Get current user
  const user = await currentUser();
  
  // Redirect to sign in if no user
  if (!user) {
    return redirect("/sign-in");
  }

  // Get course data
  const course = await getCourseById(courseId);

  if (!course) {
    return redirect("/");
  }

  // Check if user is enrolled in this course
  const isEnrolled = await checkUserEnrollment(user.id, courseId);
  
  // If not enrolled, redirect back to course overview/enrollment page
  if (!isEnrolled) {
    return redirect(`/courses/${courseId}`); // Or wherever your course preview/enrollment page is
  }

  // Redirect to the first lesson of the first module if available
  if (course.modules?.[0]?.lessons?.[0]?._id) {
    return redirect(
      `/dashboard/courses/${courseId}/lessons/${course.modules[0].lessons[0]._id}`
    );
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Welcome to {course.title}</h2>
        <p className="text-muted-foreground">
          This course has no content yet. Please check back later.
        </p>
      </div>
    </div>
  );
}