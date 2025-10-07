

import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import SmallModuleHeader from "./SmallModuleHeader";

export default function Modules() {
  return (
    <div>

      <SmallModuleHeader /><br />

      <ModulesControls /><br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Lecture 1 - Building React User Interfaces with HTML, Assignment 1, Setting Up the Development Environment, Introduction to HTML
                        <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Introduction to the course
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Learn what is Web Development
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Setting up the Development Environment
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Getting started with the Assignment 1
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            READING
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Developing Full Stack MERN Web Applications - Chapter 1 - Building React User Interfaces with HTML
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            SLIDES
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Introduction to Web Development
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Creating an HTTP server with Node.js
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Creating a React Application
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>

                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Lecture 2 - Prototyping the React Kambaz User Interface with HTML
                        <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Learn how to create user interfaces with HTML
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Keep working on assignment 1
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Deploy the assignment to Netlify
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            READING
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Developing Full Stack MERN Web Applications - Chapter 1 - Building React User Interfaces with HTML
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            SLIDES
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Implementing the Kambaz Account Screens
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Implementing the Kambaz Dashboard Screen
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Implementing the Kambaz Courses Screen
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Implementing the Kambaz Modules Screen
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>

                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Lecture 3 - Styling Web Pages with CSS and Bootstrap
                        <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Introduction to CSS
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Selectors by tag ID, classes, and document structure
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Styling color and background color
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Styling dimensions and positions
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                The box model - styling margins, borders, and paddings
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            READING
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">Developing Full Stack MERN Web Applications - Chapter 2 - Styling Web Pages with CSS</ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            SLIDES
                            <LessonControlButtons />
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Introduction to Cascading Style Sheets
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Styling with Colors
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                The Box Model
                                <LessonControlButtons />
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Rotating content & Gradient background
                                <LessonControlButtons />
                            </ListGroupItem>
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
      {/* <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">Syllabus</li>
                <li className="wd-resource-item">Office Hours Schedule</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">HTML Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is HTML?</li>
                <li className="wd-content-item">Basic HTML Tags</li>
              </ul>
              <ul>
                <li className="wd-content-item">Creating a Simple Webpage</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">CSS Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is CSS?</li>
                <li className="wd-content-item">Basic CSS Properties</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">CSS Cheat Sheet</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">JavaScript Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is JavaScript?</li>
                <li className="wd-content-item">Basic JavaScript Syntax</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">JavaScript Cheat Sheet</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Building a Simple Website</span>
              <ul className="wd-content">
                <li className="wd-content-item">Combining HTML, CSS, and JavaScript</li>
                <li className="wd-content-item">Deploying Your Website</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">Deployment Guide</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Final Project</span>
              <ul className="wd-content">
                <li className="wd-content-item">Project Requirements</li>
                <li className="wd-content-item">Submission Guidelines</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">Project Template</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
);}
