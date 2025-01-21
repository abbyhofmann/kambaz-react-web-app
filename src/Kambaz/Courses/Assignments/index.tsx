import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotePencilBold } from "react-icons/pi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router";

export default function Assignments() {
    return (
      <div>
        <AssignmentsControls /><br /><br /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light">
                <BsGripVertical className="me-2 fs-3" />
                    <strong>ASSIGNMENTS</strong>
                <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <Link to="123a" className="text-decoration-none text-dark align-items-center d-flex">
                <div className="d-flex align-items-center me-2">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="fs-4 text-success me-2" />
                </div>
                <div>
                    <strong>A1</strong>
                    <div className="text-muted small">
                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                </div>
              </Link>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <Link to="123b" className="text-decoration-none text-dark align-items-center d-flex">
                <div className="d-flex align-items-center me-2">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="fs-4 text-success me-2" />
                </div>
                <div>
                    <strong>A2</strong>
                    <div className="text-muted small">
                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                </div>
              </Link>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <Link to="123c" className="text-decoration-none text-dark align-items-center d-flex">
                <div className="d-flex align-items-center me-2">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="fs-4 text-success me-2" />
                </div>
                <div>
                    <strong>A3</strong>
                    <div className="text-muted small">
                        <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                </div>
              </Link>
              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  