import { BiLoaderCircle } from "react-icons/bi";
import { BsPlug } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SlHome, SlPeople } from "react-icons/sl";
import { Link } from "react-router";

export default function CoursesDropdown() {
    return (
        <div className="dropdown">
            <div className="dropdown-menu">
                <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                    <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger">
                        <SlHome className="me-2" />
                        Home </Link>
                    <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger">
                        <BiLoaderCircle className="me-2" />
                        Modules </Link>
                    <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger">
                        <BsPlug className="me-2" />
                        Piazza </Link>
                    <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger">
                        <BsPlug className="me-2" />
                        Zoom </Link>
                    <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger">
                        <LuNewspaper className="me-2" />
                        Assignments </Link>
                    <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger">
                        <MdOutlineRocketLaunch className="me-2" />
                        Quizzes </Link>
                    <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger" >
                        <SlPeople className="me-2" />
                        People </Link>

                    <Link to="/Kambaz/Courses/1234/Settings" id="wd-course-settings-link"
                        className="dropdown-item d-flex align-items-center border-0 bg-white text-danger" >
                        <IoSettingsOutline className="me-2" />
                        Settings </Link>
                </div>

            </div>
        </div>
    );
}