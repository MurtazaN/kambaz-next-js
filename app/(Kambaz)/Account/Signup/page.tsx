import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
    <h3>Sign up</h3>
      {/* added default values */}
      <input defaultValue="John" placeholder="John" className="wd-username" /><br/>
      <input defaultValue={"jsdhfdsjhb"} placeholder="P@$$Waard" type="password" className="wd-password" /><br/>
      <input defaultValue={"jsdhfdsjhb"} placeholder="PA$$Waard" type="password" className="wd-password-verify" /><br/>

      {/*<label htmlFor="username">Your User Name:</label> <br/>
      <input type="text" id="username" name="name" defaultValue="John Doe" /><br/>

      <label htmlFor="password">Password</label> <br/>
      <input type="password" id="password" name="password" defaultValue="P@$$Waaaard" /><br/>

      <label htmlFor="verify_password">Verify your Password</label> <br/>
      <input type="password" id="verify_password" name="password" defaultValue="P@$$Waaaard" /><br/> */}


      <Link  href="Profile" > Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}
