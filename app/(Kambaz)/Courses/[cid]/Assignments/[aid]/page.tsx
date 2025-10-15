"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";

import { Button, Col, Form, Row } from "react-bootstrap";
import FormGroup from "react-bootstrap/esm/Form";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;

    return (
        <Form id="wd-assignments-editor">

             {assignments
                .filter((assignment: any) => assignment._id === aid)
                .map((assignment: any) => (
                    <div>
                        <FormGroup className="mb-2">
                            <Form.Label htmlFor="wd-name" >Assignment Name</Form.Label>
                            <Form.Control id="wd-name" value={assignment.title} />
                        </FormGroup>

                        <FormGroup className="mb-2">
                            <Form.Control as="textarea" id="wd-description" rows={5}>
                                {assignment.description}
                                {/* Complete all the Lab exercises and Kambaz exercises described in Chapter 1 of
                                Developing Full Stack MERN Web Applications.
                                Submit a link to the landing page of your Web application running on Netlify.
                                The landing page should be the Kambaz application with a link to the Lab exercises.
                                Lab 1 should be the landing page of the Lab exercises and should include the following:
                                - Your full name and section
                                - Links to each of the lab assignments
                                - Link to the Kambaz application
                                - Links to all relevant source code repositories
                                The Kambaz application should include a link to navigate back to the landing page. */}
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="4" htmlFor="wd-points" className="text-sm-end">
                                Points
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control id="wd-points" value={assignment.points} />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="4" htmlFor="wd-group" className="text-sm-end">
                                Assignment Group
                            </Form.Label>
                            <Col sm="8">
                                <Form.Select id="wd-group" name="wd-group" defaultValue={assignment.group}>
                                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                    <option value="QUIZZES">QUIZZES</option>
                                    <option value="EXAMS">EXAMS</option>
                                    <option value="PROJECT">PROJECT</option>
                                </Form.Select>
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="4" htmlFor="wd-display-grade-as" className="text-sm-end">
                                Display Grade as
                            </Form.Label>
                            <Col sm="8">
                                <Form.Select id="wd-display-grade-as" name="wd-display-grade-as" defaultValue={assignment.displayGradeAs}>
                                    <option value="Percentage">Percentage</option>
                                    <option value="Letter">Letter</option>
                                </Form.Select>
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="4" htmlFor="wd-submission-type" className="text-sm-end">
                                Submission Type
                            </Form.Label>
                            <Col sm="8">
                                <Form.Select id="wd-submission-type" name="wd-submission-type" defaultValue={assignment.submissionType}>
                                    <option value="Online">Online</option>
                                    <option value="Pen and paper">Pen and paper</option>
                                </Form.Select>
                                <Form.Label column sm="8">
                                    Online Entry Options
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Check id="wd-text-entry" name="wd-online-entry-options" label="Text Entry" value="TEXT ENTRY" />
                                    <Form.Check id="wd-website-url" name="wd-online-entry-options" label="Website URL" value="WEBSITE URL" />
                                    <Form.Check id="wd-media-recordings" name="wd-online-entry-options" label="Media Recordings" value="MEDIA RECORDINGS" />
                                    <Form.Check id="wd-student-annotation" name="wd-online-entry-options" label="Student Annotation" value="STUDENT ANNOTATION" />
                                    <Form.Check id="wd-file-upload" name="wd-online-entry-options" label="File Upload" value="FILE UPLOAD" />
                                </Col>
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="4" className="text-sm-end">
                                Assign
                            </Form.Label>
                            <Col sm="8">
                                <Form.Label htmlFor="wd-assign-to" >Assign to</Form.Label>
                                <Form.Control id="wd-assign-to" value={assignment.assignedTo} />

                                <Form.Label htmlFor="wd-due-date" >Due</Form.Label>
                                <Form.Control type="date" id="wd-assign-to" value={assignment.dueDate} />

                                <Row className="mb-2">
                                    <Col>
                                        <Form.Label htmlFor="wd-available-from" >Available from</Form.Label>
                                        <Form.Control type="date" id="wd-available-from" value={assignment.availableFromDate} />
                                    </Col>
                                    <Col>
                                        <Form.Label htmlFor="wd-available-until" >Until</Form.Label>
                                        <Form.Control type="date" id="wd-available-until" value={assignment.availableUntilDate} />
                                    </Col>

                                </Row>
                            </Col>
                        </FormGroup>

                        <hr />

                        <div className="float-end mb-2 me-1">
                            <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                            <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger me-2">Save</Link>
                            {/* <Button variant="secondary" className="me-2">Cancel</Button>
                            <Button variant="danger" className="me-2">Save</Button> */}
                        </div>
                    </div>
                ))
            }
        </Form>
    );
}