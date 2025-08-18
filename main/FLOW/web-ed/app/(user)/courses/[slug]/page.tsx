import getCourseBySlug from "@/sanity/lib/courses/getCourseBySlug";
import { urlFor } from "@/sanity/lib/image";
import { auth } from "@clerk/nextjs/server";
import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



interface CoursePageProps {
    params: Promise<{
    slug: string;    
    }>;
}


 async function CoursePage({ params }: CoursePageProps ) {
    const {slug} = await params;
    const course = await getCourseBySlug(slug);
    const { userId } = await auth();


    /* const isEnrolled =
    userId && course?._id
      ? await isEnrolledInCourse(userId, course._id)
      : false; */

    if(!course) {
     return(
        <div className="container mx-auto px-4 py-8 mt-16">
          <h1 className="text-4xl font-bold">Course not found</h1>
        </div>
     );
    }  
 
    return  (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
     <div className="relative h-[60vh] w-full">

        {course.image && (
          <Image
            src={urlFor(course.image).url() || ""}
            alt={course.title || "Course Title"}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12">
         
         <Link
            href="/"
            prefetch={false}
            className="text-white mb-8 flex items-center hover:text-primary transition-colors w-fit"
          >
            <ChevronsLeft className="mr-2 h-5 w-5" />
            Back to Courses
          </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div>
             <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                  {course.category?.name || "Uncategorized"}
                </span>
             </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                {course.description}
              </p>
         </div>
            
              {/* <EnrollButton courseId={course._id} isEnrolled={isEnrolled} /> */}
        </div>
     </div>



    </div>
  </div>
       
  )    
}

export default CoursePage;