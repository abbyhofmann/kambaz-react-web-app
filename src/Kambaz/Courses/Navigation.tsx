import { Link } from "react-router-dom";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
        <ul id="wd-courses-navigation-list">
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
            </li>
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link">Modules</Link><br/>
            </li>
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
            </li>
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
            </li>
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link">Assignments</Link><br/>
            </li>
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes</Link><br/>
            </li>
            <li className="wd-courses-navigation-list-item">
                <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/>
            </li>
      </ul>
    </div>
  );
}
