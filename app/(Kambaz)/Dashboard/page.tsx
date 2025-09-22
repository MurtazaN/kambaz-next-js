import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="Ask Prof"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5610" className="wd-dashboard-course-link">
                <Image src="/images/nextjs.jpg" width={200} height={150} alt="Next JS course cover"/>
                <div>
                    <h5> CS5610 Next JS </h5>
                    <p className="wd-dashboard-course-title">
                        Next JS developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5800" className="wd-dashboard-course-link">
                <Image src="/images/mongodb.jpg" width={200} height={150} alt="MongoDB course cover"/>
                <div>
                    <h5> CS5800 MongoDB </h5>
                    <p className="wd-dashboard-course-title">
                        Mongo developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5900" className="wd-dashboard-course-link">
                <Image src="/images/expressjs.jpg" width={200} height={150} alt="ExpressJS course cover"/>
                <div>
                    <h5> CS5900 ExpressJS </h5>
                    <p className="wd-dashboard-course-title">
                        Express developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5700" className="wd-dashboard-course-link">
                <Image src="/images/nodejs.jpg" width={200} height={150} alt="NodeJS course cover"/>
                <div>
                    <h5> CS5700 NodeJS </h5>
                    <p className="wd-dashboard-course-title">
                        Node JS developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5100" className="wd-dashboard-course-link">
                <Image src="/images/javascript.jpg" width={200} height={150} alt="JavaScript course cover"/>
                <div>
                    <h5> CS5100 JavaScript </h5>
                    <p className="wd-dashboard-course-title">
                        JS developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5200" className="wd-dashboard-course-link">
                <Image src="/images/htmlcss.jpg" width={200} height={150} alt="HTML/CSS course cover"/>
                <div>
                    <h5> CS5200 HTML/CSS </h5>
                    <p className="wd-dashboard-course-title">
                        UI/UX developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5300" className="wd-dashboard-course-link">
                <Image src="/images/angular.jpg" width={200} height={150} alt="Angular course cover"/>
                <div>
                    <h5> CS5300 Angular </h5>
                    <p className="wd-dashboard-course-title">
                        Angular developer
                    </p>
                    <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
);}
