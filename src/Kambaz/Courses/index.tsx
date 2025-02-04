import { courses } from "../Database";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Route, Routes, useLocation, useParams } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import DarkNavbar from "./DarkNavbar";
export default function Courses() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    return (
        <div id="wd-courses">
            {/* Navbar for when screen is minimized */}
            <DarkNavbar />

            {/* Navbar for when screen is maximized */}
            <nav className="navbar text-danger d-none d-md-block">
                <FaAlignJustify
                    className="me-4 fs-4 mb-1"
                />
                <text className="fs-3 text-uppercase">{course && course.name} &gt; {pathname.split("/")[4]}</text>
            </nav>
            <hr className="me-2"/>

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
