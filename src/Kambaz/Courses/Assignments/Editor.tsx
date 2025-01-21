import { Button, Col, FormControl, FormSelect, InputGroup, Row } from "react-bootstrap";
import { LuCalendarDays } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";


export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3>Assignment Name</h3>
        <input id="wd-name" className="form-control" type="text" placeholder="A1" />
        
        <textarea className="form-control" id="wd-description" rows={7}>
            The assignment is available online. Submit a link to the landing page of
            your Web application running on Netlify. The landing page should include
            the following: Your full name and section. Links to each of the lab
            assignments. Link to the Kanbas application. Links to all relevant source
            code repositories. The Kanbas application should include a link to
            navigate back to the landing page.
        </textarea>
        <div className="float-end">
            <Row>
                <Col>
                    <label htmlFor="wd-points">Points</label>
                </Col>
                <Col>
                    <input id="wd-points" className="form-control" type="number" value={100} />
                </Col>
            </Row>
            <Row>
                <Col>
                <label htmlFor="wd-group">Assignment Group</label>
                </Col>
                <Col>
                    <FormSelect id="wd-group">
                        <option selected>ASSIGNMENTS</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </FormSelect>            
                </Col>
            </Row>
            <Row>
                <Col>
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </Col>
                <Col>
                    <FormSelect id="wd-display-grade-as">
                        <option selected>Percentage</option>
                        <option value="1">Fraction</option>
                    </FormSelect>            
                </Col>
            </Row>
            <Row>
                <Col>
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
                            <label className="form-label">Online Entry Options</label>
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
                <Row>
                    <Col>
                        <label htmlFor="wd-assign-to">Assign</label>
                    </Col>
                    <Col>
                        <div className="border rounded">
                            <Col>
                                <Row>
                                    <Col>
                                        <label className="form-label">Assign To</label>
                                        <div className="border">
                                            <button className="btn btn-light me-1 ">
                                                Everyone
                                                <IoCloseSharp className="position-relative me-2 float-end" style={{ bottom: "1px" }}/>
                                            </button>
                                        </div>
                                    </Col>
                                    <label className="form-label">Due</label>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="May 13, 2024, 11:59 PM"
                                        />
                                        <InputGroup.Text id="calendar-icon">
                                            <LuCalendarDays />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Row>
                                <Row>
                                    <Col>
                                        <label htmlFor="wd-available-from">Available from</label>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="May 6, 2024, 12:00 AM"
                                            />
                                            <InputGroup.Text id="calendar-icon">
                                                <LuCalendarDays />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <label htmlFor="wd-available-until">Until</label>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Select a date..."
                                            />
                                            <InputGroup.Text id="calendar-icon">
                                                <LuCalendarDays />
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Col>
                </Row>

                <hr />
                <div className="d-flex justify-content-end">
                    <button id="wd-add-assignment-btn" className="btn btn-outline-dark btn-lg btn-light me-1 float-end">
                        Cancel
                    </button>
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                        Save
                    </button>
                </div>
        </div>
        
        



        {/* <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option selected value="ASSIGNMENTS"> ASSIGNMENTS </option>
              </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option selected value="PERCENTAGE"> Percentage </option>
              </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option selected value="ONLINE"> Online </option>
              </select>
            </td>
          </tr>
          <br></br>
          <tr>
            <td></td>
            <td>
                <label> Online Entry Options </label><br/>
                <input type="checkbox" name="check-text-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" name="check-website-url" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" name="check-media-recordings" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" name="check-student-annotation" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" name="check-file-upload" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
          </tr>
          <br></br>
        
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td >
              <label htmlFor="wd-assign-to">Assign To</label><br/>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <br></br>

          <tr>
            <td></td>
            <td align="left" valign="top">
              <label htmlFor="wd-due-date">Due</label><br/>
              <input type="date" id="wd-due-date" value="2024-05-13" min="2000-01-01" max="2030-12-31" />
            </td>
          </tr>
          <br></br>
          
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from">Available from</label><br/>
              <input type="date" id="wd-available-from" value="2024-05-06" min="2000-01-01" max="2030-12-31" />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label><br/>
              <input type="date" id="wd-available-until" value="2024-05-20" min="2000-01-01" max="2030-12-31" />
            </td>
          </tr>

        </table>
        
        <hr />

        <table width="100%">
            <tr>
                <td align="right">
                    <button>Cancel</button>
                    <button>Save</button>
                </td>
            </tr>
        </table> */}

        
      </div>
  );}
  