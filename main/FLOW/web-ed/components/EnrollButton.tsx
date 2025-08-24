"use client";
import { useUser } from "@clerk/nextjs";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

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

  // Show loading state while checking user
  if (!isUserLoaded) {
    return (
      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Show enrolled state with link to course
  if (isEnrolled) {
    return (
      <Link
        href={`/dashboard/courses/${courseId}`}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <CheckCircle className="w-4 h-4" />
        Access Course
      </Link>
    );
  }

  // Show enroll button
  return (
    <div className="space-y-2">
      <button
        onClick={() => handleEnroll(courseId)}
        disabled={isPending}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Enrolling...
          </>
        ) : (
          <>
            {!user?.id ? "Sign in to Enroll" : "Enroll Now"}
          </>
        )}
      </button>
      
      {error && (
        <p className="text-red-600 text-sm text-center">{error}</p>
      )}
    </div>
  );
}

export default EnrollButton;