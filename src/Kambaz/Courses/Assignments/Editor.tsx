import { Col, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch(); 

  const retrievedAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );


  const initAssignment = retrievedAssignment || {
    _id: `A${Date.now()}`, // TODO - unique ID for new assignment
    title: "",
    course: cid!,
    description: "",
    points: 100,
    dueDate: "",
    availableDate: "",
  };

  const [assignment, setAssignment] = useState(initAssignment);

  const handleSave = () => {
    if (retrievedAssignment) {
        dispatch(updateAssignment(assignment));
    } else {
        dispatch(addAssignment(assignment));
    }
    // nagivate back to the assignments page
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedAssignment = { ...assignment, [name]: value };

    setAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
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
              name="point"
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
                    value={`${assignment.dueDate}`}
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
                      value={`${assignment.availableDate}`}
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
                      name="availableUntil"
                      value={`${assignment.dueDate}`}
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
          <Link to={`../Assignments`}>
            <button
              id="wd-add-assignment-btn"
              className="btn btn-lg btn-danger"
              onClick={handleSave}
            >
              Save
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

// export default function AssignmentEditor() {
//     const { aid, cid } = useParams();
//     const navigate = useNavigate();

//     // If editing, load existing assignment; else, create a blank one
//     const existingAssignment = assignments.find((a) => a._id === aid);

//     const [assignment, setAssignment] = useState(
//         existingAssignment || {
//             _id: `A${Date.now()}`, // Unique ID for new assignment
//             title: "",
//             description: "",
//             points: 100,
//             dueDate: "",
//             availableFrom: "",
//             availableUntil: ""
//         }
//     );

//     const handleChange = (e: any) => {
//         setAssignment({ ...assignment, [e.target.name]: e.target.value });
//     };

//     const handleSave = () => {
//         if (!existingAssignment) {
//             assignments.push(assignment); // Add to array if new
//         }
//         navigate(`/Kambaz/Courses/${cid}/Assignments`); // Navigate back
//     };

//     return (
//         <div id="wd-assignments-editor">
//             <Row className="px-4">
//                 <Row className="mb-2 text-start">
//                     <label>Assignment Name</label>
//                 </Row>
//                 <Row className="mb-4">
//                     <input
//                         name="title"
//                         className="form-control"
//                         type="text"
//                         placeholder="Enter assignment name"
//                         value={assignment.title}
//                         onChange={handleChange}
//                     />
//                 </Row>
//                 <Row>
//                     <textarea
//                         name="description"
//                         className="form-control"
//                         rows={7}
//                         placeholder="Enter description"
//                         value={assignment.description}
//                         onChange={handleChange}
//                     />
//                 </Row>
//             </Row>

//             {/* Assignment Details */}
//             <Row className="float-end me-5">
//                 <Row className="m-4">
//                     <Col className="text-end">
//                         <label>Points</label>
//                     </Col>
//                     <Col md={8}>
//                         <input
//                             name="points"
//                             className="form-control"
//                             type="number"
//                             value={assignment.points}
//                             onChange={handleChange}
//                         />
//                     </Col>
//                 </Row>

//                 {/* Due Dates */}
//                 <Row className="m-4">
//                     <Col className="text-end">
//                         <label>Due Date</label>
//                     </Col>
//                     <Col md={8}>
//                         <InputGroup>
//                             <FormControl
//                                 name="dueDate"
//                                 type="date"
//                                 value={assignment.dueDate}
//                                 onChange={handleChange}
//                             />
//                         </InputGroup>
//                     </Col>
//                 </Row>

//                 <Row className="m-4">
//                     <Col className="text-end">
//                         <label>Available From</label>
//                     </Col>
//                     <Col md={8}>
//                         <InputGroup>
//                             <FormControl
//                                 name="availableFrom"
//                                 type="date"
//                                 value={assignment.availableFrom}
//                                 onChange={handleChange}
//                             />
//                         </InputGroup>
//                     </Col>
//                 </Row>

//                 <Row className="m-4">
//                     <Col className="text-end">
//                         <label>Available Until</label>
//                     </Col>
//                     <Col md={8}>
//                         <InputGroup>
//                             <FormControl
//                                 name="availableUntil"
//                                 type="date"
//                                 value={assignment.availableUntil}
//                                 onChange={handleChange}
//                             />
//                         </InputGroup>
//                     </Col>
//                 </Row>
//             </Row>

//             {/* Buttons */}
//             <Row className="px-5">
//                 <hr className="w-100" />
//             </Row>
//             <Row className="me-5 float-end mb-2">
//                 <Col>
//                     <button className="btn btn-outline-dark btn-lg btn-light" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
//                         Cancel
//                     </button>
//                 </Col>
//                 <Col>
//                     <button className="btn btn-lg btn-danger" onClick={handleSave}>
//                         Save
//                     </button>
//                 </Col>
//             </Row>
//         </div>
//     );
// }
