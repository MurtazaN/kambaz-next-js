
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";

import { useSelector } from "react-redux";
import { RootState } from "../store"

export default function AccountNavigation() {

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink as={Link} href={link} active={pathname.endsWith(link.toLowerCase())}>
            {link} </NavLink> </NavItem>
      ))}
    </Nav>
  );


  // return (
  //   <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
  //     <Link href="/Account/Signin"
  //       className={`list-group-item ${pathname === '/Account/Signin' ? "active border border-0" : "text-danger border border-0"}`}>
  //       SignIn
  //     </Link>

  //     <Link href="/Account/Signup"
  //       className={`list-group-item ${pathname === '/Account/Signup' ? "active border border-0" : "text-danger border border-0"}`}>
  //       SignUp
  //     </Link>

  //     <Link href="/Account/Profile"
  //       className={`list-group-item ${pathname === '/Account/Profile' ? "active border border-0" : "text-danger border border-0"}`}>
  //       Profile
  //     </Link>
  //   </div>
  // );
}