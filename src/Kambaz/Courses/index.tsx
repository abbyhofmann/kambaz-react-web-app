import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Link, Route, Routes } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import KambazOffcanvasNavigation from "../KambazOffcanvasNavigation";
import { SiCanvas } from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
import CoursesDropdown from "./CoursesDropdown";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                {/* <FaAlignJustify className="me-4 fs-4 mb-1" 
        data-bs-toggle="collapse"
        data-bs-target="#sidebar"/> */}
                <FaAlignJustify
                    className="me-4 fs-4 mb-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#nav-sidebarOffcanvas"
                    aria-controls="nav-sidebarOffcanvas"
                />
                Course 1234
                <div className="dropdown d-md-none float-end">
                    <RiArrowDropDownLine
                        className="text-danger mb-1 fs-1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    />
                    {/* Dropdown menu */}
                    <CoursesDropdown />
                </div>
            </h2>
            <hr />
            {/* the dropdown course nav is only available by clicking the down arrow button when screen is minimized */}

            <CoursesDropdown />

            {/* the offcanvas nav page is only available by clicking the FaAlignJustify button when the screen is minimized */}
            <div
                className="offcanvas offcanvas-start d-md-none"
                tabIndex={-1}
                id="nav-sidebarOffcanvas"
                aria-labelledby="nav-sidebarOffcanvasLabel"
            >
                <div className="offcanvas-header">
                    <Link
                        to="/Kambaz/Dashboard"
                        id="wd-home-link"
                        className="list-group-item d-flex align-items-center border-0 bg-white text-danger fs-2"
                    >
                        <SiCanvas className="fs-1 text-danger me-2" />
                        Canvas
                    </Link>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <KambazOffcanvasNavigation />
                </div>
            </div>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
