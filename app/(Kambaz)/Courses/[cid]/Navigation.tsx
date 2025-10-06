// import Link from "next/link";
// export default function CourseNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
//       <Link href="/Courses/1234/Home" id="wd-course-home-link"
//         className="list-group-item active border-0"> Home </Link>
//       <Link href="/Courses/1234/Modules" id="wd-course-modules-link"
//         className="list-group-item text-danger border-0"> Modules </Link>
//       <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className="list-group-item text-danger border-0"> Piazza </Link>
//       <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className="list-group-item text-danger border-0"> Zoom </Link>
//       <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link"
//         className="list-group-item text-danger border-0"> Assignments </Link>
//       <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link"
//         className="list-group-item text-danger border-0"> Quizzes </Link>
//       <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
//         className="list-group-item text-danger border-0" > People </Link>
      
//       <Link href="/Courses/1234/Grades" id="wd-course-grades-link"
//         className="list-group-item text-danger border-0"> Grades </Link>
//       <Link href="/Courses/1234/Exams" id="wd-course-exams-link"
//         className="list-group-item text-danger border-0"> Exams </Link>
//       <Link href="/Courses/1234/Project" id="wd-course-project-link"
//         className="list-group-item text-danger border-0"> Project </Link>
//     </div>
//   );}


"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CourseNavigation() {
  const pathname = usePathname();
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
      <Link href="/Courses/1234/Home" id="wd-course-home-link"
        className={`list-group-item border-0 ${pathname.includes('/Home') ? 'active' : 'text-danger'}`}>
        Home
      </Link>
      
      <Link href="/Courses/1234/Modules" id="wd-course-modules-link"
        className={`list-group-item border-0 ${pathname.includes('/Modules') ? 'active' : 'text-danger'}`}>
        Modules
      </Link>
      
      <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`list-group-item border-0 ${pathname.includes('/Piazza') ? 'active' : 'text-danger'}`}>
        Piazza
      </Link>
      
      <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`list-group-item border-0 ${pathname.includes('/Zoom') ? 'active' : 'text-danger'}`}>
        Zoom
      </Link>
      
      <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link"
        className={`list-group-item border-0 ${pathname.includes('/Assignments') ? 'active' : 'text-danger'}`}>
        Assignments
      </Link>
      
      <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${pathname.includes('/Quizzes') ? 'active' : 'text-danger'}`}>
        Quizzes
      </Link>
      
      <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
        className={`list-group-item border-0 ${pathname.includes('/People') ? 'active' : 'text-danger'}`}>
        People
      </Link>
      
      <Link href="/Courses/1234/Grades" id="wd-course-grades-link"
        className={`list-group-item border-0 ${pathname.includes('/Grades') ? 'active' : 'text-danger'}`}>
        Grades
      </Link>
      
      <Link href="/Courses/1234/Exams" id="wd-course-exams-link"
        className={`list-group-item border-0 ${pathname.includes('/Exams') ? 'active' : 'text-danger'}`}>
        Exams
      </Link>
      
      <Link href="/Courses/1234/Project" id="wd-course-project-link"
        className={`list-group-item border-0 ${pathname.includes('/Project') ? 'active' : 'text-danger'}`}>
        Project
      </Link>
    </div>
  );
}