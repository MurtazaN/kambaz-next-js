export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}

      <div className="top-buttons">
      <button>Collapse All</button>
      <button>View Progress</button>
      <button>Publish All</button>
      <button>+ Module</button>
    </div>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">Syllabus</li>
                <li className="wd-resource-item">Office Hours Schedule</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">HTML Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is HTML?</li>
                <li className="wd-content-item">Basic HTML Tags</li>
              </ul>
              <ul>
                <li className="wd-content-item">Creating a Simple Webpage</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">CSS Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is CSS?</li>
                <li className="wd-content-item">Basic CSS Properties</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">CSS Cheat Sheet</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">JavaScript Basics</span>
              <ul className="wd-content">
                <li className="wd-content-item">What is JavaScript?</li>
                <li className="wd-content-item">Basic JavaScript Syntax</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">JavaScript Cheat Sheet</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Building a Simple Website</span>
              <ul className="wd-content">
                <li className="wd-content-item">Combining HTML, CSS, and JavaScript</li>
                <li className="wd-content-item">Deploying Your Website</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">Deployment Guide</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Final Project</span>
              <ul className="wd-content">
                <li className="wd-content-item">Project Requirements</li>
                <li className="wd-content-item">Submission Guidelines</li>
              </ul>
              <ul className="wd-resources">
                <li className="wd-resource-item">Project Template</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
