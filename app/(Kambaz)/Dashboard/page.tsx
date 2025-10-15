"use client";

import { Row, Col, Card, Button } from "react-bootstrap";
import * as db from "../Database";

import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    const courses = db.courses;

    return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);
    
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        
        <Row xs={1} md={5} className="g-4">
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/1234/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            Full Stack software developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5610/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/nextjs.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5610 Next JS
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            Next JS developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5800/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/mongodb.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5800 MongoDB
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            Mongo developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5900/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/expressjs.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5900 ExpressJS
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            Express developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5700/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5700 NodeJS
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            Node JS developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5100/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/javascript.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5100 JavaScript
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            JS developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5200/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/htmlcss.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5200 HTML/CSS
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            UI/UX developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/5300/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/angular.jpg" width="100%" height={160}/>
                    <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5300 Angular
                            
                        </Card.Title>
                        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            Angular developer</Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Link>
                </Card>
            </Col>
        </Row>

      </div>
    </div>
);}
