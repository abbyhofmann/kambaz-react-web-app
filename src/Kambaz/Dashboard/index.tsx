import { Link } from "react-router-dom";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { useState } from "react";
import { enroll, unenroll } from "../Courses/enrollmentsReducer";

export default function Dashboard({
  course,
  setCourse,
//   courseName,
//   courseDescription,
}: {
  course: any;
  setCourse: (course: any) => void;
//   courseName: string;
//   courseDescription: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();

  // boolean for determining whether or not to show all the courses offered, or just those the student is enrolled in
  const [showAllCourses, setShowAllCourses] = useState(false);

  // filter out the enrollments of the current user and map them to the course
  const enrolledCourses = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  // list of courses to show (either all or just those the student is enrolled in)
  const coursesToDisplay = showAllCourses
    ? courses
    : courses.filter((course: any) => enrolledCourses.includes(course._id));

  return (
    <div id="wd-dashboard" className="p-2">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </button>
      )}
      {currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                dispatch(
                  addCourse({
                    name: course.name,
                    description: course.description,
                  })
                );
                dispatch(
                    enroll({user: currentUser._id,
                        course: course._id }) // what is the course id (since this is a new course and it is assigned a random course id in the reducer upon creation)
                );
              }}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse({ ...course }))}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({coursesToDisplay.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesToDisplay.map((course: any) => {
            const isEnrolled = enrolledCourses.includes(course._id);
            return (
              <Col
                className="wd-dashboard-course d-flex"
                style={{ width: "300px" }}
              >
                <Card className="d-flex flex-column h-100">
                  <img
                    src={`${
                      course._id.toString().charAt(3) === "0"
                        ? `images/${course._id}.jpeg`
                        : `images/neu.jpeg`
                    }`}
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5
                      className="wd-dashboard-course-title card-title text-truncate"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        display: "block",
                      }}
                    >
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    {currentUser.role === "STUDENT" && isEnrolled ? (
                      <button
                        className="btn btn-danger float-end"
                        onClick={() =>
                          dispatch(
                            unenroll({
                              user: currentUser._id,
                              course: course._id,
                            })
                          )
                        }
                      >
                        Unenroll
                      </button>
                    ) : (
                      currentUser.role === "STUDENT" && (
                        <button
                          className="btn btn-success float-end"
                          onClick={() =>
                            dispatch(
                              enroll({
                                user: currentUser._id,
                                course: course._id,
                              })
                            )
                          }
                        >
                          Enroll
                        </button>
                      )
                    )}
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <button className="btn btn-primary"> Go </button>
                    </Link>
                    {currentUser.role === "FACULTY" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(course._id));
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    )}
                    {currentUser.role === "FACULTY" && (
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
