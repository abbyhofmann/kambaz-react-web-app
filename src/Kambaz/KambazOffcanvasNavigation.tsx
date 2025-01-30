import { Link } from "react-router-dom";
import { PiGaugeBold } from "react-icons/pi";
import { MdAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
import { FaBook, FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { HiMiniInbox } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

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
        className="list-group-item d-flex align-items-center justify-content-between border-0 bg-white text-danger"
      >
        <div className="d-flex align-items-center">
          <MdAccountCircle className="me-2 fs-4 text-secondary" />
          Account
        </div>
        <IoIosArrowForward className="text-secondary fs-6 me-2" />
      </Link>
      <Link
        to="/Kambaz/Dashboard"
        id="wd-course-link"
        className="list-group-item d-flex align-items-center justify-content-between border-0 bg-white text-danger"
      >
        <div className="d-flex align-items-center">
          <FaBook className="me-2 fs-4" />
          Courses
        </div>
        <IoIosArrowForward className="text-secondary fs-6 me-2" />
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
        className="list-group-item d-flex align-items-center justify-content-between border-0 bg-white text-danger"
      >
        <div className="d-flex align-items-center">
          <FaRegClock className="me-2 fs-4" />
          History
        </div>
        <IoIosArrowForward className="text-secondary fs-6 me-2" />
      </Link>
      <Link
        to=""
        id="wd-help-link"
        className="list-group-item d-flex align-items-center justify-content-between border-0 bg-white text-danger"
      >
        <div className="d-flex align-items-center">
          <MdOutlineHelpOutline className="me-2 fs-4" />
          Help
        </div>
        <IoIosArrowForward className="text-secondary fs-6 me-2" />
      </Link>
    </div>
  );
}
