"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses, enrollCourse, unenrollCourse } from "../Courses/reducer";
import { RootState } from "../store";

import { Row, Col, Card, Button, FormControl } from "react-bootstrap";

import FacultyRoute from "../Account/FacultyRoute";

import Link from "next/link";

export default function Dashboard() {

  const dispatch = useDispatch();

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  // const currentUser = db.users.find((u) => u.username === "iron_man"); //faculty user for testing
  const { enrollments } = useSelector((state: RootState) => state.coursesReducer);

  const [showEnrolled, setShowEnrolled] = useState(true);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description"
  })

  const enrolledCourses = courses.filter((course: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === (currentUser as any)?._id &&
        enrollment.course === course._id
    ));

  const isEnrolled = (courseId: any) => {
    return enrolledCourses.some((course: any) =>
      course._id === courseId
    );
  };

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <FacultyRoute>
        <h5>
          New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() => dispatch(addNewCourse(course))} >
            Add
          </button>
          <button className="btn btn-warning float-end me-2"
            onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
            Update
          </button>
          <br /><br />
          <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </h5>
        <hr />
      </FacultyRoute>

      <h2 id="wd-dashboard-published">
        Published Courses ({(showEnrolled ? enrolledCourses : courses).length})
        <Button className="float-end me-2" variant="primary"
          onClick={() => setShowEnrolled(!showEnrolled)}>
          Enrollments
        </Button>
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">

          {(showEnrolled ? enrolledCourses : courses)
            .map((course: any) => (
              // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link href={isEnrolled(course._id) ? (`/Courses/${course._id}/Home`) : ("")} className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src={course.image} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>
                      <Button variant="primary" className="float-start mb-3" hidden={isEnrolled(course._id) ? (false) : (true)}>Go</Button>

                      {showEnrolled ? (
                        <FacultyRoute>
                          <Button onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }} className="float-end"
                            variant="danger"
                            id="wd-delete-course-click">
                            Delete
                          </Button>
                          <Button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            variant="warning"
                            className="me-2 float-end" >
                            Edit
                          </Button>
                        </FacultyRoute>
                      ) : (
                        <Button
                          className="float-end mb-3" variant={isEnrolled(course._id) ? "danger" : "success"}
                          onClick={(event) => {
                            event.preventDefault();
                            if (isEnrolled(course._id)) {
                              dispatch(unenrollCourse({ userId: (currentUser as any)?._id, courseId: course._id }));
                            } else {
                              dispatch(enrollCourse({ userId: (currentUser as any)?._id, courseId: course._id }));
                            }
                          }}>
                          {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                        </Button>
                      )}

                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))
          }

        </Row>
      </div>
    </div>
  );

  // return (
  //   <div id="wd-dashboard">
  //     <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

  //     <h5>New Course
  //       <button className="btn btn-primary float-end"
  //         id="wd-add-new-course-click"
  //         onClick={() => dispatch(addNewCourse(course))} > Add
  //       </button>
  //       {/* Update Button */}
  //       <button className="btn btn-warning float-end me-2"
  //         onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
  //         Update
  //       </button>
  //     </h5><br />
  //     <FormControl value={course.name} className="mb-2"
  //       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
  //     <FormControl as="textarea" value={course.description} rows={3} //added fix as="..." for rows
  //       onChange={(e) => setCourse({ ...course, description: e.target.value })} />
  //     <hr />


  //     <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

  //     <div id="wd-dashboard-courses">
  //       <Row xs={1} md={5} className="g-4">

  //         {courses
  //           .filter((course) =>
  //             enrollments.some(
  //               (enrollment) =>
  //                 currentUser &&
  //                 enrollment.user === (currentUser as any)?._id &&
  //                 enrollment.course === course._id
  //             ))
  //           .map((course) => (
  //             // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
  //               <Card>
  //                 <Link href={`/Courses/${course._id}/Home`}
  //                   className="wd-dashboard-course-link text-decoration-none text-dark" >
  //                   <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
  //                   <Card.Body className="card-body">
  //                     <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
  //                       {course.name} </Card.Title>
  //                     <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
  //                       {course.description}
  //                     </Card.Text>
  //                     <Button variant="primary">
  //                       Go
  //                     </Button>
  //                     {/* Delete button */}
  //                     <button onClick={(event) => {
  //                       event.preventDefault();
  //                       dispatch(deleteCourse(course._id));
  //                       deleteCourse(course._id);
  //                     }} className="btn btn-danger float-end"
  //                       id="wd-delete-course-click">
  //                       Delete
  //                     </button>
  //                     {/* Edit Button */}
  //                     <button id="wd-edit-course-click"
  //                       onClick={(event) => {
  //                         event.preventDefault();
  //                         setCourse(course);
  //                       }}
  //                       className="btn btn-warning me-2 float-end" >
  //                       Edit
  //                     </button>

  //                   </Card.Body>
  //                 </Link>
  //               </Card>
  //             </Col>
  //           ))}
  //       </Row>
  //     </div>
  //   </div>
  // );
}