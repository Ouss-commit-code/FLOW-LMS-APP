// app/api/enroll/route.ts - Updated with revalidation
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { enrollUserInCourse } from "@/lib/enrollment";

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { courseId } = await request.json();
    
    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required" },
        { status: 400 }
      );
    }

    console.log(`🚀 Enrolling user ${user.id} in course ${courseId}`);

    // Enroll the user
    const success = await enrollUserInCourse(user.id, courseId);
    
    if (!success) {
      return NextResponse.json(
        { error: "Failed to enroll in course" },
        { status: 500 }
      );
    }

    // Revalidate the course page to refresh enrollment status
    revalidatePath(`/dashboard/courses/${courseId}`);
    
    console.log(`✅ User enrolled successfully, path revalidated`);

    return NextResponse.json(
      { message: "Successfully enrolled in course" },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("❌ Error in enrollment API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}