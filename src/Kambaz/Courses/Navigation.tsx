import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation(); 

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kambaz/Courses/${cid}/${link}`} className={`list-group-item border border-0
              ${pathname.includes(link) ? "text-black bg-white active" : "text-danger"}`}>
          {link}
        </Link>
      ))}
    </div>
);}
