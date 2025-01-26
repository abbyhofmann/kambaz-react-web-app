import { Link } from "react-router-dom";
import { PiGaugeBold } from "react-icons/pi";
import { MdAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
import { FaBook, FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { HiMiniInbox } from "react-icons/hi2";

export default function KambazOffcanvasNavigation() {
 return (
    <div className="list-group">
    <Link
      to="/Kambaz/Dashboard"
      id="wd-dashboard-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <PiGaugeBold className="me-2 fs-4" />
      Dashboard
    </Link>
    <Link
      to="/Kambaz/Account"
      id="wd-account-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <MdAccountCircle className="me-2 fs-4 text-secondary" />
      Account
    </Link>
    <Link
      to="/Kambaz/Dashboard"
      id="wd-course-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <FaBook className="me-2 fs-4" />
      Courses
    </Link>
    <Link
      to="/Kambaz/Calendar"
      id="wd-calendar-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <FaCalendarAlt className="me-2 fs-4" />
      Calendar
    </Link>
    <Link
      to="/Kambaz/Inbox"
      id="wd-inbox-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <HiMiniInbox className="me-2 fs-4" />
      Inbox
    </Link>
    <Link
      to=""
      id="wd-history-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <FaRegClock className="me-2 fs-4" />
      History
    </Link>
    <Link
      to=""
      id="wd-help-link"
      className="list-group-item d-flex align-items-center border-0 bg-white text-danger"
    >
      <MdOutlineHelpOutline className="me-2 fs-4" />
      Help
    </Link>
  </div>
);}
