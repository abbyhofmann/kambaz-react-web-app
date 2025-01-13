export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3>Assignment Name</h3>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
            The assignment is available online. Submit a link to the landing page of
            your Web application running on Netlify. The landing page should include
            the following: Your full name and section. Links to each of the lab
            assignments. Link to the Kanbas application. Links to all relevant source
            code repositories. The Kanbas application should include a link to
            navigate back to the landing page.
        </textarea>
        <br /><br />

        <table>
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
        </table>

        
      </div>
  );}
  