import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
      <Link href="/Account" id="wd-account-link">Account</Link><br/>
      <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link href="/Dashboard" id="wd-course-link">Courses</Link><br/> {/* Land on the same page as dashboard */}
      <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link href="/Labs" id="wd-labs-link">Labs</Link><br/>
      {/* Confirm if this is needed : Quiz, Piazza, grades and Zoom Pages are not implemented yet 
      <Link href="/Quiz" id="wd-quiz-link">Quiz</Link><br/>
      <Link href="/Piazza" id="wd-piazza-link">Piazza</Link><br/>
      <Link href="/Zoom" id="wd-zoom-link">Zoom</Link><br/>
      <Link href="/Grades" id="wd-grades-link">Grades</Link><br/>*/}
    </div>
);}
