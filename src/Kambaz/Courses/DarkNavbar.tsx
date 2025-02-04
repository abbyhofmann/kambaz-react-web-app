import { FaAlignJustify } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiCanvas } from "react-icons/si";
import { Link } from "react-router";
import KambazOffcanvasNavigation from "../KambazOffcanvasNavigation";
import CoursesDropdown from "./CoursesDropdown";

interface DarkNavbarProps {
    course: any;
}

export default function DarkNavbar(props: DarkNavbarProps) {
    const { course } = props;
    return (
        <div>
            <nav className="navbar text-white bg-dark d-md-none d-flex align-items-center justify-content-between">
                <FaAlignJustify
                    className="me-4 fs-4 mb-1 ms-1 float-start"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#nav-sidebarOffcanvas"
                    aria-controls="nav-sidebarOffcanvas"
                />
                <div className="container-row text-center">
                    <p className="text-uppercase fs-4 mt-2 mb-0">{course && course.name}</p>
                    <p className="text-uppercase fs-6 mb-2">modules </p>
                </div>
                <RiArrowDropDownLine
                    className="text-white mb-1 fs-1"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
                />
            </nav>
            {/* dropdown for the course navigation when screen is minimized */}
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
                    {/* side popup for kambaz navigation when screen is minimized */}
                    <KambazOffcanvasNavigation />
                </div>
            </div>
        </div>
    )
}