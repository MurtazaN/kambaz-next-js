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
        { label: "People", path: "People" },
    ];

    return (
        <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <ListGroup.Item key={link.label} href={`/Courses/${cid}/${link.path}`} as={Link} id={`wd-course-${link.label.toLowerCase()}-link`}
                    className={`border border-0 ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
                    {link.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
