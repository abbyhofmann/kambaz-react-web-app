import { Link } from "react-router-dom";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as db from "../Database";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }
) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    return (
        <div id="wd-dashboard" className="p-2">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role == "FACULTY" &&
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </div>}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course) => (
                            <Col className="wd-dashboard-course d-flex" style={{ width: "300px" }}>
                                <Card className="d-flex flex-column h-100">
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <img
                                            src={`${course._id.toString().charAt(3) === "0"
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
                                                    display: "block"
                                                }}
                                            >
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>
                                            <button className="btn btn-primary"> Go </button>
                                            {currentUser.role == "FACULTY" &&
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>}
                                            {currentUser.role == "FACULTY" &&
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>}
                                        </div>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
}
