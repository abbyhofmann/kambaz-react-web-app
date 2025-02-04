import { BiLoaderCircle } from "react-icons/bi";
import { BsPlug } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SlHome, SlPeople } from "react-icons/sl";
import { Link, useParams } from "react-router";

export default function CoursesDropdown() {
  
    const links = [
        { label: "Home", icon: SlHome },
        { label: "Modules", icon: BiLoaderCircle },
        { label: "Piazza", icon: BsPlug },
        { label: "Zoom", icon: BsPlug },
        { label: "Assignments", icon: LuNewspaper },
        { label: "Quizzes", icon: MdOutlineRocketLaunch },
        { label: "People", icon: SlPeople },
        { label: "Settings", icon: IoSettingsOutline },
      ];
  
    const { cid } = useParams();
    
    return (
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark">
                <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                {links.map((link) => (
        <Link key={link.label} to={`/Kambaz/Courses/${cid}/${link.label}`} id={`wd-course-${link.label}-link`} className="list-group-item d-flex align-items-center border-0 bg-white text-danger">
          {link.icon({ className: "me-2"})}
          {link.label}
        </Link>
      ))}
                </div>

            </div>
        </div>
    );
}