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
          <a href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> 
          <div>
            Multiple Modules | <strong>Not available until May 6 at 12:00am</strong> | <strong>Due May 13 at 11:59pm</strong> | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          {/* Complete On Your Own */}
          <a href="/Courses/1234/Assignments/124"
              className="wd-assignment-link" >
            A2 - CSS + Bootstrap
          </a>
          <div>
            Multiple Modules | <strong>Not available until May 13 at 12:00am</strong> | <strong>Due May 20 at 11:59pm</strong> | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/125"
             className="wd-assignment-link" >
            A3 - JavaScript Basics + React
          </a>
          <div>
            Multiple Modules | <strong>Not available until May 20 at 12:00am</strong> | <strong>Due May 27 at 11:59pm</strong> | 100 pts
          </div>
        </li>
      </ul>
    </div>
);}
