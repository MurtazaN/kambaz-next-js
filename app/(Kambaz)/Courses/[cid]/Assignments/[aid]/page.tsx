"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import * as db from "../../../../Database";

import { Button, Col, Form, Row } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {

    const router = useRouter();
    
    const dispatch = useDispatch();
    const { cid, aid } = useParams();

    const isNew = aid === "New";

    const newAssignment = {
        title: "New Assignment",
        description: "New description",
        course: cid,
        points: 100,
        dueDate: new Date(),
        availableDate: new Date(),
        untilDate: new Date(),
    }

    const [assignment, setAssignment] = useState<any>({});
    const { assignments } = useSelector((state: any) => state.assignmentReducer);

    useEffect(() => {
        setAssignment(
            
            isNew
                ? newAssignment
                : assignments.find((assignment: any) => assignment._id === aid)
        );
    }, [aid, isNew, assignments]); // Adding dependencies

    const handleSave = (assignment: any) => {
        if (isNew) { 
            dispatch(addAssignment({ ...assignment, course: cid }));
        } else {
            dispatch(updateAssignment(assignment));
        }
        
        router.push(`/Courses/${cid}/Assignments`);
    }

    return (
        <Form id="wd-assignments-editor">


            <div>
                <Form.Group className="mb-2">
                    <Form.Label htmlFor="wd-name" >Assignment Name</Form.Label>
                    <Form.Control id="wd-name"
                        value={assignment?.title}
                        onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, title: e.target.value }))}
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Control as="textarea" id="wd-description" rows={5}
                        defaultValue={assignment?.description}
                        onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, description: e.target.value }))}
                    />
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="4" htmlFor="wd-points" className="text-sm-end">
                        Points
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control id="wd-points"
                            value={assignment?.points}
                            onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, points: e.target.value }))}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="4" htmlFor="wd-group" className="text-sm-end">
                        Assignment Group
                    </Form.Label>
                    <Col sm="8">
                        <Form.Select id="wd-group" name="wd-group"
                            defaultValue={assignment?.group}
                            onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, group: e.target.value }))}
                        >
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="exams">EXAMS</option>
                            <option value="project">PROJECT</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="4" htmlFor="wd-display-grade-as" className="text-sm-end">
                        Display Grade as
                    </Form.Label>
                    <Col sm="8">
                        <Form.Select id="wd-display-grade-as" name="wd-display-grade-as"
                            defaultValue={assignment?.displayGradeAs}
                            onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, displayGradeAs: e.target.value }))}
                        >
                            <option value="percentage">Percentage</option>
                            <option value="letter">Letter</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="4" htmlFor="wd-submission-type" className="text-sm-end">
                        Submission Type
                    </Form.Label>
                    <Col sm="8">
                        <Form.Select id="wd-submission-type" name="wd-submission-type"
                            defaultValue={assignment?.submissionType}
                            onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, submissionType: e.target.value }))}
                        >
                            <option value="online">Online</option>
                            <option value="pen and paper">Pen and paper</option>
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
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="4" className="text-sm-end">
                        Assign
                    </Form.Label>
                    <Col sm="8">
                        <Form.Label htmlFor="wd-assign-to" >Assign to</Form.Label>
                        <Form.Control id="wd-assign-to"
                            value={assignment?.assignedTo}
                            onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, assignedTo: e.target.value }))}
                        />

                        <Form.Label htmlFor="wd-due-date" >Due</Form.Label>
                        <Form.Control type="date" id="wd-assign-to"
                            value={assignment?.dueDate}
                            onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, dueDate: e.target.value }))}
                        />

                        <Row className="mb-2">
                            <Col>
                                <Form.Label htmlFor="wd-available-from" >Available from</Form.Label>
                                <Form.Control type="date" id="wd-available-from"
                                    value={assignment?.availableFromDate}
                                    onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, availableFromDate: e.target.value }))}
                                />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="wd-available-until" >Until</Form.Label>
                                <Form.Control type="date" id="wd-available-until"
                                    value={assignment?.availableUntilDate}
                                    onChange={(e) => setAssignment((prevState: any) => ({ ...prevState, availableUntilDate: e.target.value }))}
                                />
                            </Col>

                        </Row>
                    </Col>
                </Form.Group>

                <hr />

                <div className="float-end mb-2 me-1">
                    <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                    <Button 
                    onClick={() => handleSave(assignment)} 
                    className="me-2" variant="danger">
                        Save
                        </Button>
                </div>
            </div>
        </Form>
    );
}

// export default function AssignmentEditor() {
//     const { cid, aid } = useParams();
//     const assignments = db.assignments;

//     return (
//         <Form id="wd-assignments-editor">

//              {assignments
//                 .filter((assignment) => assignment._id === aid)
//                 .map((assignment) => (
//                     <div key={assignment._id}>
//                         <FormGroup className="mb-2">
//                             <Form.Label htmlFor="wd-name" >Assignment Name</Form.Label>
//                             <Form.Control id="wd-name" value={assignment.title} />
//                         </FormGroup>

//                         <FormGroup className="mb-2">
//                             <Form.Control as="textarea" id="wd-description" rows={5}>
//                                 {assignment.description}
//                             </Form.Control>
//                         </FormGroup>

//                         <FormGroup as={Row} className="mb-2">
//                             <Form.Label column sm="4" htmlFor="wd-points" className="text-sm-end">
//                                 Points
//                             </Form.Label>
//                             <Col sm="8">
//                                 <Form.Control id="wd-points" value={assignment.points} />
//                             </Col>
//                         </FormGroup>

//                         <FormGroup as={Row} className="mb-2">
//                             <Form.Label column sm="4" htmlFor="wd-group" className="text-sm-end">
//                                 Assignment Group
//                             </Form.Label>
//                             <Col sm="8">
//                                 <Form.Select id="wd-group" name="wd-group" defaultValue={assignment.group}>
//                                     <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                                     <option value="QUIZZES">QUIZZES</option>
//                                     <option value="EXAMS">EXAMS</option>
//                                     <option value="PROJECT">PROJECT</option>
//                                 </Form.Select>
//                             </Col>
//                         </FormGroup>

//                         <FormGroup as={Row} className="mb-2">
//                             <Form.Label column sm="4" htmlFor="wd-display-grade-as" className="text-sm-end">
//                                 Display Grade as
//                             </Form.Label>
//                             <Col sm="8">
//                                 <Form.Select id="wd-display-grade-as" name="wd-display-grade-as" defaultValue={assignment.displayGradeAs}>
//                                     <option value="Percentage">Percentage</option>
//                                     <option value="Letter">Letter</option>
//                                 </Form.Select>
//                             </Col>
//                         </FormGroup>

//                         <FormGroup as={Row} className="mb-2">
//                             <Form.Label column sm="4" htmlFor="wd-submission-type" className="text-sm-end">
//                                 Submission Type
//                             </Form.Label>
//                             <Col sm="8">
//                                 <Form.Select id="wd-submission-type" name="wd-submission-type" defaultValue={assignment.submissionType}>
//                                     <option value="Online">Online</option>
//                                     <option value="Pen and paper">Pen and paper</option>
//                                 </Form.Select>
//                                 <Form.Label column sm="8">
//                                     Online Entry Options
//                                 </Form.Label>
//                                 <Col sm="8">
//                                     <Form.Check id="wd-text-entry" name="wd-online-entry-options" label="Text Entry" value="TEXT ENTRY" />
//                                     <Form.Check id="wd-website-url" name="wd-online-entry-options" label="Website URL" value="WEBSITE URL" />
//                                     <Form.Check id="wd-media-recordings" name="wd-online-entry-options" label="Media Recordings" value="MEDIA RECORDINGS" />
//                                     <Form.Check id="wd-student-annotation" name="wd-online-entry-options" label="Student Annotation" value="STUDENT ANNOTATION" />
//                                     <Form.Check id="wd-file-upload" name="wd-online-entry-options" label="File Upload" value="FILE UPLOAD" />
//                                 </Col>
//                             </Col>
//                         </FormGroup>

//                         <FormGroup as={Row} className="mb-2">
//                             <Form.Label column sm="4" className="text-sm-end">
//                                 Assign
//                             </Form.Label>
//                             <Col sm="8">
//                                 <Form.Label htmlFor="wd-assign-to" >Assign to</Form.Label>
//                                 <Form.Control id="wd-assign-to" value={assignment.assignedTo} />

//                                 <Form.Label htmlFor="wd-due-date" >Due</Form.Label>
//                                 <Form.Control type="date" id="wd-assign-to" value={assignment.dueDate} />

//                                 <Row className="mb-2">
//                                     <Col>
//                                         <Form.Label htmlFor="wd-available-from" >Available from</Form.Label>
//                                         <Form.Control type="date" id="wd-available-from" value={assignment.availableFromDate} />
//                                     </Col>
//                                     <Col>
//                                         <Form.Label htmlFor="wd-available-until" >Until</Form.Label>
//                                         <Form.Control type="date" id="wd-available-until" value={assignment.availableUntilDate} />
//                                     </Col>

//                                 </Row>
//                             </Col>
//                         </FormGroup>

//                         <hr />

//                         <div className="float-end mb-2 me-1">
//                             <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//                             <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger me-2">Save</Link>
                            
//                         </div>
//                     </div>
//                 ))
//             }
//         </Form>
//     );
// }