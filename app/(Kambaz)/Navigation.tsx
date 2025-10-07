
"use client";

import { usePathname } from "next/navigation";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
              id="wd-kambaz-navigation">
    {/* <ListGroup
      className={className || "rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"}
      style={style || { width: 120 }}
      id="wd-kambaz-navigation"
    > */}
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU_RGB.png" width="75px" alt="Northeastern University" />
     </ListGroupItem>

     <ListGroupItem className={`border-0 text-center ${pathname.includes('/Account') ? 'bg-white' : 'bg-black'}`}>
       <Link href="/Account" id="wd-account-link" className={`text-decoration-none ${pathname.includes('/Account') ? 'text-danger' : 'text-white'}`}>
         <FaRegCircleUser className={`fs-1 ${pathname.includes('/Account') ? 'text-danger' : 'text-white'}`} />
         <br />
         Account
       </Link>
     </ListGroupItem>

     <ListGroupItem className={`border-0 text-center ${pathname === '/Dashboard' ? 'bg-white' : 'bg-black'}`}>
       <Link href="/Dashboard" id="wd-dashboard-link" className={`text-decoration-none ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`}>
         <AiOutlineDashboard className={`fs-1 ${pathname === '/Dashboard' ? 'text-danger' : 'text-white'}`} />
         <br />
         Dashboard
       </Link>
     </ListGroupItem>

      <ListGroupItem className={`border-0 text-center ${pathname.includes('/Courses') ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Dashboard" id="wd-courses-link" className={`text-decoration-none ${pathname.includes('/Courses') ? 'text-danger' : 'text-white'}`}>
          <LiaBookSolid className={`fs-1 ${pathname.includes('/Courses') ? 'text-danger' : 'text-white'}`} />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      <ListGroupItem className={`border-0 text-center ${pathname === '/Calendar' ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Calendar" id="wd-calendar-link" className={`text-decoration-none ${pathname === '/Calendar' ? 'text-danger' : 'text-white'}`}>
          <IoCalendarOutline className={`fs-1 ${pathname === '/Calendar' ? 'text-danger' : 'text-white'}`} />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem className={`border-0 text-center ${pathname === '/Inbox' ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Inbox" id="wd-inbox-link" className={`text-decoration-none ${pathname === '/Inbox' ? 'text-danger' : 'text-white'}`}>
          <FaInbox className={`fs-1 ${pathname === '/Inbox' ? 'text-danger' : 'text-white'}`} />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      <ListGroupItem className={`border-0 text-center ${pathname.includes('/Labs') ? 'bg-white' : 'bg-black'}`}>
        <Link href="/Labs" id="wd-labs-link" className={`text-decoration-none ${pathname.includes('/Labs') ? 'text-danger' : 'text-white'}`}>
          <LiaCogSolid className={`fs-1 ${pathname.includes('/Labs') ? 'text-danger' : 'text-white'}`} />
          <br />
          Labs
        </Link>
      </ListGroupItem>
   </ListGroup>
  );
}        
