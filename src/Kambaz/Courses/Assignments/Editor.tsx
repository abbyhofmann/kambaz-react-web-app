import { Col, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = {
      title: assignment.title,
      course: cid,
      description: assignment.description,
      points: assignment.points,
      dueDate: assignment.dueDate,
      availableDate: assignment.availableDate,
    };
    const createdAssignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(createdAssignment));
  };

  const retrievedAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  const initAssignment = retrievedAssignment || {
    _id: `A${Date.now()}`, // TODO - unique ID for new assignment
    title: "",
    course: cid!,
    description: "",
    points: "",
    dueDate: new Date(),
    availableDate: new Date(),
  };

  const [assignment, setAssignment] = useState(initAssignment);

  const handleSave = () => {
    if (retrievedAssignment) {
      saveAssignment(assignment);
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
      // ensure that all fields are filled in before saving assignment
    } else if (
      assignment._id &&
      assignment.title &&
      assignment.description &&
      assignment.points &&
      assignment.dueDate &&
      assignment.availableDate
    ) {
      createAssignmentForCourse();
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedValue = name === "points" ? Number(value) : value;
    const updatedAssignment = { ...assignment, [name]: updatedValue };

    setAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
  };

  // needed to format date for db endpoint to work 
  const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];  // "2025-01-13"
  };

  return (
    <div id="wd-assignments-editor">
      <Row className="px-4">
        <Row className="mb-2 text-start">
          <label>Assignment Name</label>
        </Row>
        <Row className="mb-4">
          <input
            name="title"
            id="wd-name"
            className="form-control"
            type="text"
            placeholder={`${assignment.title}`}
            value={`${assignment.title}`}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <textarea
            name="description"
            className="form-control"
            id="wd-description"
            rows={7}
            onChange={handleChange}
            value={assignment.description}
          />
        </Row>
      </Row>

      <Row className="float-end me-5">
        <Row className="m-4">
          <Col className="text-end">
            <label htmlFor="wd-points">Points</label>
          </Col>
          <Col md={8}>
            <input
              name="points"
              id="wd-points"
              className="form-control"
              type="number"
              value={assignment.points}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="m-4">
          <Col className="text-end">
            <label htmlFor="wd-group">Assignment Group</label>
          </Col>
          <Col md={8}>
            <FormSelect id="wd-group">
              <option selected>ASSIGNMENTS</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="m-4">
          <Col className="text-end">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </Col>
          <Col md={8}>
            <FormSelect id="wd-display-grade-as">
              <option selected>Percentage</option>
              <option value="1">Fraction</option>
            </FormSelect>
          </Col>
        </Row>
        <Row className="m-4">
          <Col className="text-end">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </Col>
          <Col md={8}>
            <div className="border rounded p-3">
              <div className="mb-3">
                <FormSelect id="wd-submission-type">
                  <option selected>Online</option>
                </FormSelect>
              </div>
              <div>
                <label className="form-label fw-bold">
                  Online Entry Options
                </label>
                <div className="mt-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="text-entry"
                    />
                    <label className="form-check-label" htmlFor="text-entry">
                      Text Entry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="website-url"
                      checked
                    />
                    <label className="form-check-label" htmlFor="website-url">
                      Website URL
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="media-recordings"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="media-recordings"
                    >
                      Media Recordings
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="student-annotation"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="student-annotation"
                    >
                      Student Annotation
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="file-uploads"
                    />
                    <label className="form-check-label" htmlFor="file-uploads">
                      File Uploads
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="m-4">
          <Col className="text-end">
            <label htmlFor="wd-assign-to">Assign</label>
          </Col>
          <Col md={8}>
            <div className="border rounded p-3">
              <Row className="mb-3">
                <Col>
                  <label className="form-label fw-bold">Assign To</label>
                  <div className="border rounded p-2">
                    <button className="btn btn-light d-flex align-items-center justify-content-between">
                      <span className="me-3" style={{ opacity: 0.7 }}>
                        Everyone
                      </span>
                      <IoCloseSharp
                        className="float-end"
                        style={{ opacity: 0.7 }}
                      />
                    </button>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <label className="form-label fw-bold">Due</label>
                <InputGroup>
                  <FormControl
                    name="dueDate"
                    value={`${formatDateForInput(assignment.dueDate)}`}
                    type="date"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Row>
              <Row className="mb-3">
                <Col>
                  <label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </label>
                  <InputGroup>
                    <FormControl
                      name="availableDate"
                      value={`${formatDateForInput(assignment.availableDate)}`}
                      type="date"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </label>
                  <InputGroup>
                    <FormControl
                      name="dueDate"
                      value={`${formatDateForInput(assignment.dueDate)}`}
                      type="date"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Row>

      <Row className="px-5">
        <hr className="w-100" />
      </Row>
      <Row className="me-5 float-end mb-2">
        <Col>
          <Link to={`../Assignments`}>
            <button
              id="wd-add-assignment-btn"
              className="btn btn-outline-dark btn-lg btn-light"
            >
              Cancel
            </button>
          </Link>
        </Col>
        <Col>
          <button
            id="wd-add-assignment-btn"
            className="btn btn-lg btn-danger"
            onClick={handleSave}
          >
            Save
          </button>
        </Col>
      </Row>
    </div>
  );
}
