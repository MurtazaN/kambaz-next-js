import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";

// import { Link } from "react-router-dom";

import Link from "next/link";

export default function KambazNavigation() {
  return (

  //   <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
  //             id="wd-kambaz-navigation">
  //    <ListGroupItem className="bg-black border-0 text-center" as="a"
  //             target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
  //       <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
  //    </ListGroupItem>
  //    <ListGroupItem className="border-0 bg-black text-center">
  //      <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
  //        <FaRegCircleUser className="fs-1 text-white" />
  //        <br />
  //        Account
  //      </Link>
  //    </ListGroupItem>
  //    <ListGroupItem className="border-0 bg-white text-center">
  //      <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
  //        <AiOutlineDashboard className="fs-1 text-danger" />
  //        <br />
  //        Dashboard
  //      </Link>
  //    </ListGroupItem>

  //    {/* complete styling the rest of the links for  */}

  //     <ListGroupItem className="border-0 bg-black text-center">
  //       <Link href="/Dashboard" id="wd-courses-link" className="text-white text-decoration-none">
  //         <LiaBookSolid className="fs-1 text-white" />
  //         <br />
  //         Courses
  //       </Link>
  //     </ListGroupItem>
  //     <ListGroupItem className="border-0 bg-black text-center">
  //       <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none">
  //         <IoCalendarOutline className="fs-1 text-white" />
  //         <br />
  //         Calendar
  //       </Link>
  //     </ListGroupItem>
  //     <ListGroupItem className="border-0 bg-black text-center">
  //       <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
  //         <FaInbox className="fs-1 text-white" />
  //         <br />
  //         Inbox
  //       </Link>
  //     </ListGroupItem>
  //     <ListGroupItem className="border-0 bg-black text-center">
  //       <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
  //         <LiaCogSolid className="fs-1 text-white" />
  //         <br />
  //         Labs
  //       </Link>
  //     </ListGroupItem>

  //  </ListGroup>


    <div id="wd-kambaz-navigation" style={{ width: 120 }} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU_RGB.png" width="75px" />
            </a>
            <Link href="/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account
            </Link>
            <Link href="/Dashboard" id="wd-dashboard-link" className="list-group-item text-center border-0 bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </Link>
            <Link href="/Dashboard" id="wd-course-link" className="list-group-item text-white bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </Link>
            <Link href="/Calendar" id="wd-calendar-link" className="list-group-item text-white bg-black text-center border-0">
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </Link>
            <Link href="/Inbox" id="wd-inbox-link" className="list-group-item text-white bg-black text-center border-0">
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </Link>
            <Link href="/Labs" id="wd-labs-link" className="list-group-item text-white bg-black text-center border-0">
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs
            </Link>
        </div>
    
);}
