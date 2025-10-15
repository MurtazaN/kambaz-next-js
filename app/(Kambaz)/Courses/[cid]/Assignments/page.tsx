"use client";

import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { useState } from "react";

import { BsGripVertical } from "react-icons/bs";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

import GreenEdit from "./GreenEdit";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";

import LessonControlButtons from "../Modules/LessonControlButtons";

import Link from "next/link";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    const [isExpanded, setIsExpanded] = useState(true);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });
    }

  return (
    <div id="wd-assignments">

      <AssignmentControls /><br /><br /><br /><br />

      <ListGroup id="wd-assignment-list" className="rounded-0">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoIosArrowDown />
                ASSIGNMENTS
                <AssignmentControlButtons />
            </div>

            {isExpanded &&
                        assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <ListGroup className="wd-lessons rounded-0" key={assignment._id}>
                                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                                        <Row>
                                            <Col xs="auto">
                                                <BsGripVertical className="me-2 fs-3" />
                                            </Col>
                                            <Col xs="auto">
                                                <GreenEdit />
                                            </Col>
                                            <Col>
                                                <a href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`} className="wd-assignment-link" >
                                                    {assignment.title}
                                                </a>
                                                <br />
                                                <span style={{ color: 'red' }}>Multiple Modules</span> |
                                                {
                                                    assignment.availableFromDate > new Date().toISOString() ?
                                                        <span> <b>Not available until</b> {formatDate(assignment.dueDate)} at 12:00am |</span> :
                                                        ""
                                                }
                                                <br />
                                                <b>Due</b> {formatDate(assignment.dueDate)} at 11:59pm | -/{assignment.points} pts
                                            </Col>
                                            <Col xs="auto">
                                                <LessonControlButtons />
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            ))
                    }




            {/* <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
                                A1 - ENV + HTML
                            </Link>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Jan 15 at 12am |
                            <br />
                            <b>Due</b> Jan 22 at 11:59pm | -/100 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>

                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
                                A2 - CSS + BOOTSTRAP
                            </Link>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Jan 17 at 12am |
                            <br />
                            <b>Due</b> Feb 5 at 11:59pm | -/100 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>

                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
                                A3 - JAVASCRIPT + REACT
                            </Link>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Jan 31 at 12am |
                            <br />
                            <b>Due</b> Feb 19 at 11:59pm | -/100 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>

                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >
                                A4 - NODE + MONGO.DB
                            </Link>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Feb 14 at 12am |
                            <br />
                            <b>Due</b> Mar 12 at 11:59pm | -/100 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup> */}
        </ListGroupItem>
      </ListGroup>

      <ListGroup id="wd-quiz-list" className="rounded-0">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoIosArrowDown />
                QUIZZES
            </div>
            <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <a href="#/Kambaz/Courses/1234/Quizzes/1" className="wd-quiz-link" >
                                Quiz 1
                            </a>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                            <br />
                            <b>Due</b> May 13 at 11:59pm | -/10 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>

                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <a href="#/Kambaz/Courses/1234/Quizzes/2" className="wd-quiz-link" >
                                Quiz 2
                            </a>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                            <br />
                            <b>Due</b> May 20 at 11:59pm | -/10 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup id="wd-project-list" className="rounded-0">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoIosArrowDown />
                PROJECTS
                <AssignmentControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <a href="#/Kambaz/Courses/1234/Projects/1" className="wd-project-link" >
                                Project
                            </a>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                            <br />
                            <b>Due</b> May 27 at 11:59pm | -/200 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        </ListGroupItem>
      </ListGroup>

      <ListGroup id="wd-exam-list" className="rounded-0">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoIosArrowDown />
                EXAMS
                <AssignmentControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <a href="#/Kambaz/Courses/1234/Exams/1" className="wd-exam-link" >
                                Midterm Exam
                            </a>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Feb 15 at 12:00am |
                            <br />
                            <b>Due</b> Feb 28 at 11:59pm | -/100 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col xs="auto">
                            <BsGripVertical className="me-2 fs-3" />
                        </Col>
                        <Col xs="auto">
                            <GreenEdit />
                        </Col>
                        <Col>
                            <a href="#/Kambaz/Courses/1234/Exams/2" className="wd-exam-link" >
                                Final Exam
                            </a>
                            <br />
                            <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 30 at 12:00am |
                            <br />
                            <b>Due</b> May 30 at 11:59pm | -/200 pts
                        </Col>
                        <Col xs="auto">
                            <LessonControlButtons />
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        </ListGroupItem>
      </ListGroup>


    </div>
);
}
