
import Link from "next/link";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link href="/Account/Signin" className="list-group-item active border border-0"> Signin  </Link>
            <Link href="/Account/Signup" className="list-group-item text-danger border border-0"> Signup  </Link>
            <Link href="/Account/Profile" className="list-group-item text-danger border border-0"> Profile </Link>
        </div>
    );
}