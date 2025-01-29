import { Button, Col, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { LuCalendarDays } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";


export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <Row className="px-4">
                <Row className="mb-2 text-start">
                    <label>Assignment Name</label>
                </Row>
                <Row className="mb-4">
                    <input id="wd-name" className="form-control" type="text" placeholder="A1" />
                </Row>
                <Row>
                    <textarea className="form-control" id="wd-description" rows={7}>
                        The assignment is available online. Submit a link to the landing page of
                        your Web application running on Netlify. The landing page should include
                        the following: Your full name and section. Links to each of the lab
                        assignments. Link to the Kanbas application. Links to all relevant source
                        code repositories. The Kanbas application should include a link to
                        navigate back to the landing page.
                    </textarea>
                </Row>
            </Row>


            <Row className="float-end me-5">
                <Row className="m-4">
                    <Col className="text-end">
                        <label htmlFor="wd-points">Points</label>
                    </Col>
                    <Col md={8} >
                        <input id="wd-points" className="form-control" type="number" value={100} />
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
                                <label className="form-label fw-bold">Online Entry Options</label>
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
                                        <label className="form-check-label" htmlFor="media-recordings">
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
                                            <span className="me-3" style={{ opacity: 0.7 }}>Everyone</span>
                                            <IoCloseSharp className="float-end" style={{ opacity: 0.7 }} />
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <label className="form-label fw-bold">Due</label>
                                <InputGroup>
                                    <FormControl
                                        placeholder="May 13, 2024, 11:59 PM"
                                    />
                                    <InputGroup.Text id="calendar-icon">
                                        <LuCalendarDays />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <label htmlFor="wd-available-from" className="fw-bold">Available from</label>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="May 6, 2024, 12:00 AM"
                                            type="date"
                                        />
                                        <InputGroup.Text id="calendar-icon">
                                            <LuCalendarDays />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <label htmlFor="wd-available-until" className="fw-bold">Until</label>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Select a date..."
                                            type="date"
                                        />
                                        <InputGroup.Text id="calendar-icon">
                                            <LuCalendarDays />
                                        </InputGroup.Text>
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
            <Row className="me-5 float-end">
                <Col>
                    <button id="wd-add-assignment-btn" className="btn btn-outline-dark btn-lg btn-light">
                        Cancel
                    </button>
                </Col>
                <Col>
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger">
                        Save
                    </button>
                </Col>
            </Row>
        </div>
    );
}
