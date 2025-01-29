import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-2">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kambaz/Courses/2001/Home">
                <img src="/images/bouve.jpeg"  width="100%" height={160}/>
                <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        NRST 2001
                    </h5>
                <p className="wd-dashboard-course-title card-text">
                    Foundations of Professional Nursing Practice  </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">

            <Link to="/Kambaz/Courses/3170/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/construction.jpg"  width="100%" height={160} />
                <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        ARCH 3170
                    </h5>
                <p className="wd-dashboard-course-title card-text">
                    Architecture, Infrastructure, and the City  </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">

            <Link to="/Kambaz/Courses/1150/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/gov.jpg"  width="100%" height={160}/>
                <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title"> POLS 1150 </h5>
                        <p className="wd-dashboard-course-title card-text">
                            American Government  
                        </p>
                    <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card rounded-3 overflow-hidden">
            <Link to="/Kambaz/Courses/4550/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/khoury.jpeg" width="100%" height={160}/>
                <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title"> CS 4550 </h5>
                    <p className="wd-dashboard-course-title card-text">
                        Web Development  </p>
                    <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link to="/Kambaz/Courses/2331/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <img src="/images/math.jpeg" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title"> MATH 2331 </h5>
                <p className="wd-dashboard-course-title card-text">
                    Linear Algebra  </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link to="/Kambaz/Courses/4700/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src="/images/networks.avif" width="100%" height={160}/>
                    <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title"> CS 4700 </h5>
                        <p className="wd-dashboard-course-title card-text">
                            Networks  </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
            </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
                <Link to="/Kambaz/Courses/1210/Home"
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <img src="/images/neu.jpeg" width="100%" height={160}/>
                    <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title"> CS 1210 </h5>
                        <p className="wd-dashboard-course-title card-text">
                            Professional Development for Khoury Co-op  </p>
                        <button className="btn btn-primary"> Go </button>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
);}
