"use client";

import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import KambazNavigation from "../../../Navigation";
import CourseNavigation from "../Navigation";

export default function ModuleHeader() {
  const [showKambazNav, setShowKambazNav] = useState(false);
  const [showCourseNav, setShowCourseNav] = useState(false);

  return (
    <>
      {/* Module Header - only shows on small screens */}
      <div className="d-md-none bg-black text-white p-3 d-flex justify-content-between align-items-center">
        <button
          className="btn text-white p-0"
          onClick={() => setShowKambazNav(true)}
        >
          <IoMenu size={30} />
        </button>
        
        <div className="text-center flex-grow-1">
          <div>Course 1234</div>
          <div>Modules</div>
        </div>

        <button
          className="btn text-white p-0"
          onClick={() => setShowCourseNav(true)}
        >
          <IoIosArrowDown size={30} />
        </button>
      </div>

      {/* Kambaz Navigation Sidebar (Hamburger Menu) */}
      <Offcanvas show={showKambazNav} onHide={() => setShowKambazNav(false)} placement="start">
        <Offcanvas.Header className="bg-white border-bottom">
          <img src="/images/NEU_RGB.png" width="100px" alt="Canvas" />
          <Offcanvas.Title className="text-center">
            <span className="fw-bold text-danger">KAMBAZ</span><br />
          </Offcanvas.Title>
          <button
            className="btn-close"
            onClick={() => setShowKambazNav(false)}
          ></button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <KambazNavigation />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Course Navigation Dropdown */}
      <Offcanvas show={showCourseNav} onHide={() => setShowCourseNav(false)} placement="top" style={{ height: '75vh' }}>
        <Offcanvas.Header className="bg-black text-white">
          <Offcanvas.Title className="text-center flex-grow-1">
            Course 1234<br /><small>Modules</small>
          </Offcanvas.Title>
          <button className="btn-close btn-close-white" onClick={() => setShowCourseNav(false)}>
            {/* <IoClose size={30} /> */}
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0" style={{ overflowY: 'auto' }}>
          <CourseNavigation />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}