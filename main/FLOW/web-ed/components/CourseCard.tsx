import { GetCoursesQueryResult } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "./Loader";
import { urlFor } from "@/sanity/lib/image";

interface CourseCardProps {
  course: GetCoursesQueryResult[number];
  progress?: number;
  href: string;
}

 function CourseCard({ course, progress, href }: CourseCardProps) {
  return ( 
    <Link href={href}
     prefetch={false}
     className="group hover:no-underline flex"
    >
    <div className="bg-card rounded-xl overflow-hidden shadow-lg
     transition-all duration-300 ease-in-out
      hover:shadow-xl hover:translate-y-[-4px] border border-border 
      flex flex-col flex-1">
        <div className="relative h-52 w-full overflow-hidden">
         {course.image ? (
            <Image
              src={urlFor(course.image).url() || ""}
              alt={course.title || "Course Image"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <Loader size="lg" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
           <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-sm font-medium px-3 py-1 bg-black/50 text-white rounded-full backdrop-blur-sm">
              {course.category?.name || "Uncategorized"}
            </span>
        </div>  
    </div>   
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {course.title}
        </h3>    
         <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
            {course.description}
        </p>


    </div>
    </div>    
  </Link>
  ); 
}

export default CourseCard;