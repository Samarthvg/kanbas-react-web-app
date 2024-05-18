export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <p></p>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>

                </tr>
                <p></p>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-select-assignment-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>

                </tr>
                <p></p>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-select-grade-type">
                            <option selected value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                    </td>

                </tr>
                <p></p>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-select-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="In-person">In-person</option>
                        </select>
                        <p></p>
                        <div id="wd-online-options">
                            <label>Online Entry Options:</label><br />

                            <input type="checkbox" name="check-online-options" id="wd-chkbox-text" />
                            <label htmlFor="wd-chkbox-text">Text Entry</label><br />

                            <input type="checkbox" name="check-online-options" id="wd-chkbox-website" />
                            <label htmlFor="wd-chkbox-website">Website URL</label><br />

                            <input type="checkbox" name="check-online-options" id="wd-chkbox-recordings" />
                            <label htmlFor="wd-chkbox-recordings">Media Recordings</label><br />

                            <input type="checkbox" name="check-online-options" id="wd-chkbox-annotations" />
                            <label htmlFor="wd-chkbox-annotations">Student Annotations</label> <br />

                            <input type="checkbox" name="check-online-options" id="wd-chkbox-uploads" />
                            <label htmlFor="wd-chkbox-uploads">File Uploads</label>
                        </div>
                    </td>

                </tr>
                <p></p>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign">Assign</label>
                    </td>
                    <td valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label> <br />
                        <input type="text" id="wd-assign-to" defaultValue={"Everyone"} />
                        <p></p>
                        <label htmlFor="wd-due">Due</label> <br />
                        <input type="date" id="wd-due-date" defaultValue={"05/13/2024"} />
                        <p></p>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label><br />
                            <input type="date" id="wd-available-from" defaultValue={"05/06/2024"} />
                        </td>
                        <td> <label htmlFor="wd-available-until">Until</label><br />
                            <input type="date" id="wd-available-until" defaultValue={"05/20/2024"} /></td>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}><hr /></td>
                </tr>
                <tr>
                    <td colSpan={2} align="right">
                        <td><button id="wd-cancel" onClick={() => alert("Are you sure?")} type="button">
                            Cancel
                        </button> </td>
                        <td><button id="wd-save" onClick={() => alert("Saved!")} type="button">
                            Save
                        </button></td>
                    </td>
                </tr>
            </table>

        </div>
    );
}
