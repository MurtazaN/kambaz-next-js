"use client";

import { ListGroup } from "react-bootstrap";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
    const links = [
        { label: "Home", path: "Home" },
        { label: "Modules", path: "Modules" },
        { label: "Piazza", path: "Piazza" },
        { label: "Zoom", path: "Zoom" },
        { label: "Assignments", path: "Assignments" },
        { label: "Quizzes", path: "Quizzes" },
        { label: "Grades", path: "Grades" },
        { label: "People", path: "People/Table" },
    ];

    return (
        <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <ListGroup.Item key={link.label} href={`/Courses/${cid}/${link.path}`} as={Link} id={`wd-course-${link.label.toLowerCase()}-link`} className={`border border-0 ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
                    {link.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
//       <Link href="/Courses/1234/Home" id="wd-course-home-link"
//         className={`list-group-item border-0 ${pathname.includes('/Home') ? 'active' : 'text-danger'}`}>
//         Home
//       </Link>
      
//       <Link href="/Courses/1234/Modules" id="wd-course-modules-link"
//         className={`list-group-item border-0 ${pathname.includes('/Modules') ? 'active' : 'text-danger'}`}>
//         Modules
//       </Link>
      
//       <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link"
//         className={`list-group-item border-0 ${pathname.includes('/Piazza') ? 'active' : 'text-danger'}`}>
//         Piazza
//       </Link>
      
//       <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link"
//         className={`list-group-item border-0 ${pathname.includes('/Zoom') ? 'active' : 'text-danger'}`}>
//         Zoom
//       </Link>
      
//       <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link"
//         className={`list-group-item border-0 ${pathname.includes('/Assignments') ? 'active' : 'text-danger'}`}>
//         Assignments
//       </Link>
      
//       <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link"
//         className={`list-group-item border-0 ${pathname.includes('/Quizzes') ? 'active' : 'text-danger'}`}>
//         Quizzes
//       </Link>
      
//       <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
//         className={`list-group-item border-0 ${pathname.includes('/People') ? 'active' : 'text-danger'}`}>
//         People
//       </Link>
      
//       <Link href="/Courses/1234/Grades" id="wd-course-grades-link"
//         className={`list-group-item border-0 ${pathname.includes('/Grades') ? 'active' : 'text-danger'}`}>
//         Grades
//       </Link>
      
//       <Link href="/Courses/1234/Exams" id="wd-course-exams-link"
//         className={`list-group-item border-0 ${pathname.includes('/Exams') ? 'active' : 'text-danger'}`}>
//         Exams
//       </Link>
      
//       <Link href="/Courses/1234/Project" id="wd-course-project-link"
//         className={`list-group-item border-0 ${pathname.includes('/Project') ? 'active' : 'text-danger'}`}>
//         Project
//       </Link>
//     </div>
//   );
// }