"use client";

import { useUser } from "@clerk/nextjs";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

function EnrollButton({
    courseId,
    isEnrolled,
}: {
  courseId: string;
  isEnrolled: boolean;
}) {

 const { user, isLoaded: isUserLoaded } = useUser();
 const router = useRouter();
 const [isPending, startTransition] = useTransition();
 const [error, setError] = useState<string | null>(null);
 
 const handleEnroll = async (courseId: string) => {

 if (!user?.id) {
      // Redirect to sign in instead of trying to enroll
      router.push("/sign-in");
      return;
    }

  startTransition(async () => {

    try {
        setError(null);
        
        // Add actual enrollment logic here
        // This should be an API call to enroll the user
        const response = await fetch('/api/enroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user.id,
            courseId: courseId,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to enroll in course');
        }

        // Only navigate after successful enrollment
        router.push(`/dashboard/courses/${courseId}`);
        
      } catch (error) {
        console.error("Error in handleEnroll:", error);
        setError("Failed to enroll in course. Please try again.");
      }

    });
 };

  // Show loading state while checking user is loading
  if (!isUserLoaded || isPending) {
    return (
      <div className="w-full h-12 rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
      </div>
    );
  }
 
 // Show enrolled state with link to course
  if (isEnrolled) {
    return (
      <Link
        prefetch={false}
        href={`/dashboard/courses/${courseId}`}
        className="w-full rounded-lg px-6 py-3 font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 h-12 flex items-center justify-center gap-2 group"
      >
        <span>Access Course</span>
        <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </Link>
    );
  }


  return (
    <div className="space-y-2">
     <button onClick={() => handleEnroll(courseId)}
     className={`w-full rounded-lg px-6 py-3 font-medium transition-all duration-300 ease-in-out relative h-12
        ${
          isPending || !user?.id
            ? "bg-gray-100 text-gray-400 cursor-not-allowed hover:scale-100"
            : "bg-white text-black hover:scale-105 hover:shadow-lg hover:shadow-black/10"
        }
      `}
      disabled={!user?.id || isPending} 
     >

    {!user?.id ? (
        <span className={`${isPending ? "opacity-0" : "opacity-100"}`}>
          Sign in to Enroll
        </span>
      ) : (
        <span className={`${isPending ? "opacity-0" : "opacity-100"}`}>
          Enroll Now
        </span>
      )}

  {isPending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

  </button>
  {error && (
        <p className="text-red-600 text-sm text-center">{error}</p>
      )}
 </div> 
  );
}

export default EnrollButton;