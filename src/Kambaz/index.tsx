import { Routes, Route, Navigate }
  from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import ProtectedCourseRoute from "./Account/ProtectedCourseRoute";

export default function Kambaz() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  // const [courseDescription, setCourseDescription] = useState("");
  // const [courseName, setCourseName] = useState("");
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-0">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            // protected so that only logged in users can access the dashboard
            <ProtectedRoute>
              <Dashboard
              course={course}
              setCourse={setCourse}
              // courseName={courseName}
              // courseDescription={courseDescription} 
              />
            </ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={
            // protected so that only enrolled students can access a course page
            <ProtectedCourseRoute>
              <Courses courses={courses} />
            </ProtectedCourseRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
