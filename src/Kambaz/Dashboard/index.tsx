import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2001/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/bouve.jpeg" width={200} />
            <div>
              <h5> NRST 2001 </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Professional Nursing Practice  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3170/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/construction.jpg" width={200} />
            <div>
              <h5> ARCH 3170 </h5>
              <p className="wd-dashboard-course-title">
                Architecture, Infrastructure, and the City  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1150/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/gov.jpg" width={200} />
            <div>
              <h5> POLS 1150 </h5>
              <p className="wd-dashboard-course-title">
                American Government  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/khoury.jpeg" width={200} />
            <div>
              <h5> CS 4550 </h5>
              <p className="wd-dashboard-course-title">
                Web Development  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2331/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/math.jpeg" width={200} />
            <div>
              <h5> MATH 2331 </h5>
              <p className="wd-dashboard-course-title">
                Linear Algebra  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4700/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/networks.avif" width={200} />
            <div>
              <h5> CS 4700 </h5>
              <p className="wd-dashboard-course-title">
                Networks  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1210/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/neu.jpeg" width={200} />
            <div>
              <h5> CS 1210 </h5>
              <p className="wd-dashboard-course-title">
                Professional Development for Khoury Co-op  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
