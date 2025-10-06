
"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function AccountNavigation() {

    const pathname = usePathname();

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link href="/Account/Signin" 
              className={`list-group-item ${pathname === '/Account/Signin' ? "active border border-0" : "text-danger border border-0"}`}> 
              SignIn 
            </Link>
    
            <Link href="/Account/Signup" 
              className={`list-group-item ${pathname === '/Account/Signup' ? "active border border-0" : "text-danger border border-0"}`}>
              SignUp 
            </Link>

            <Link href="/Account/Profile" 
              className={`list-group-item ${pathname === '/Account/Profile' ? "active border border-0" : "text-danger border border-0"}`}>
              Profile 
            </Link>
        </div>
    );
}
            {/* <Link href="/Account/Signin" className="list-group-item active border border-0"> Signin  </Link> */}
        //     <Link href="/Account/Signup" className="list-group-item text-danger border border-0"> Signup  </Link>
        //     <Link href="/Account/Profile" className="list-group-item text-danger border border-0"> Profile </Link>
        // </div>