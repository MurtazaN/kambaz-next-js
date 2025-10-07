
import { Form } from "react-bootstrap";
import Link from "next/link";


export default function Signup() {
  return (
    <div id="wd-signup-screen">
    <h3>Sign up</h3>
      <Form.Control id="wd-username"
             defaultValue="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             defaultValue="password" type="password"
             className="mb-2"/>
      <Form.Control id="wd-verify-password"
             defaultValue="password" type="password"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}
