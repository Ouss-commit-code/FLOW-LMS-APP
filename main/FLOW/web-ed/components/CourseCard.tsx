import { GetCoursesQueryResult } from "@/sanity.types";
import Link from "next/link";

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
        test
    
    </div>    
    


  </Link>
  );
  
}

export default CourseCard;