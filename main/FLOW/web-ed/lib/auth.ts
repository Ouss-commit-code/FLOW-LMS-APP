// lib/auth.ts - Updated to use your enrollment function
import { checkUserEnrollment } from "./enrollment";

export async function checkCourseAccess(userId: string | null, courseId: string) {
  console.log(`🔐 Checking course access for user ${userId} in course ${courseId}`);
  
  if (!userId) {
    console.log(`❌ No user ID provided`);
    return {
      isAuthorized: false,
      redirect: "/sign-in"
    };
  }

  try {
    // Use the same enrollment check as your course page
    const isEnrolled = await checkUserEnrollment(userId, courseId);
    
    if (!isEnrolled) {
      console.log(`❌ User not enrolled in course ${courseId}`);
      return {
        isAuthorized: false,
        redirect: `/courses/${courseId}` // Redirect to course overview/enrollment page
      };
    }

    console.log(`✅ User has access to course ${courseId}`);
    return {
      isAuthorized: true,
      redirect: null
    };
    
  } catch (error) {
    console.error("❌ Error checking course access:", error);
    return {
      isAuthorized: false,
      redirect: "/"
    };
  }
}