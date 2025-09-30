import Link from "next/link";
export default function Signin() {
 return (
//    <div id="wd-signin-screen">
//      <h3>Sign in</h3>
//      <input placeholder="username" className="wd-username" /> <br />
//      <input placeholder="password" type="password" className="wd-password" /> <br />
//      <Link href="Profile" id="wd-signin-btn"> Sign in </Link> <br />
//      <Link href="Signup" id="wd-signup-link"> Sign up </Link>
//    </div>
    <div id="wd-signin-screen">
      <h3>Sign in</h3>

      {/**/}<input defaultValue="Jason" className="wd-username" placeholder="Jason" /> <br />
      <input defaultValue="B@ckT0Pa$$" className="wd-password" placeholder="B@ckT0Pa$$" type="password" /> <br />

      {/*ask about error for "for" keyword in label tag*/}
      {/*<label htmlFor="username">Your User Name:</label> <br/>
      <input type="text" id="username" name="name" defaultValue="John Doe" /><br/>

      <label htmlFor="password">Password</label> <br/>
      <input type="password" id="password" name="password" defaultValue="P@$$Waaaard" /><br/>*/}

      <Link id="wd-signin-btn" href="/Dashboard"> Sign in </Link> <br /> {/* '/' is root and then dashoard */}
      <Link id="wd-signup-link" href="Signup"> Sign up </Link>
    </div>
);}
