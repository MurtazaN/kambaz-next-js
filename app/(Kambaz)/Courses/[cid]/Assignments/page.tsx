import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          {/* <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a>  */}
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> 
          <div>
            Multiple Modules | <strong>Not available until May 6 at 12:00am</strong> | <strong>Due May 13 at 11:59pm</strong> | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          {/* Complete On Your Own */}
          <Link href="/Courses/1234/Assignments/124"
              className="wd-assignment-link" >
            A2 - CSS + Bootstrap
          </Link>
          <div>
            Multiple Modules | <strong>Not available until May 13 at 12:00am</strong> | <strong>Due May 20 at 11:59pm</strong> | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/125"
             className="wd-assignment-link" >
            A3 - JavaScript Basics + React
          </Link>
          <div>
            Multiple Modules | <strong>Not available until May 20 at 12:00am</strong> | <strong>Due May 27 at 11:59pm</strong> | 100 pts
          </div>
        </li>
      </ul>

      <ul id="wd-quiz-list">
        <li className="wd-quiz-list-item">
          <Link href="/Courses/1234/Quizzes/123"
             className="wd-quiz-link" >
            Q1 - HTML Quiz
          </Link> 
          <div>
            Multiple Modules | <strong>Not available until May 6 at 12:00am</strong> | <strong>Due May 13 at 11:59pm</strong> | 10 pts
          </div>
        </li>
        <li className="wd-quiz-list-item">
          <Link href="/Courses/1234/Quizzes/124"
              className="wd-quiz-link" >
            Q2 - CSS Quiz
          </Link>
          <div>
            Multiple Modules | <strong>Not available until May 13 at 12:00am</strong> | <strong>Due May 20 at 11:59pm</strong> | 10 pts
          </div>
        </li>
      </ul>

      <ul id="wd-project-list">
        <li className="wd-project-list-item">
          <Link href="/Courses/1234/Projects/123"
             className="wd-project-link" >
            Project - Portfolio Website
          </Link> 
          <div>
            Multiple Modules | <strong>Not available until April 6 at 12:00am</strong> | <strong>Due May 27 at 11:59pm</strong> | 200 pts
          </div>
        </li>
      </ul>

      <ul id="wd-exam-list">
        <li className="wd-exam-list-item">
          <Link href="/Courses/1234/Exams/123"
             className="wd-exam-link" >
            Midterm Exam
          </Link> 
          <div>
            Multiple Modules | <strong>Not available until Feb 15 at 12:00am</strong> | <strong>Due Feb 28 at 11:59pm</strong> | 100 pts
          </div>
        </li>
        <li className="wd-exam-list-item">
          <Link href="/Courses/1234/Exams/124"
              className="wd-exam-link" >
            Final Exam
          </Link>
          <div>
            Multiple Modules | <strong>Not available until May 30 at 12:00am</strong> | <strong>Due May 30 at 11:59pm</strong> | 200 pts
          </div>
        </li>
      </ul>


    </div>
);}
