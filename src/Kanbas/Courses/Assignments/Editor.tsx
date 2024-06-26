export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <form action="#" className="assignment-editor" style={{maxWidth:"600px"}}>
                <label htmlFor="wd-name" className="mb-2">Assignment Name</label><br />
                <input id="wd-name" className="form-control" value="A1 - ENV + HTML" /> <br />
                <textarea id="wd-description" className="form-control">
                    The assignment is available online Submit a link to the landing page of
                </textarea>
                <p></p>
                <table>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points" className="me-2">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" className="form-control" value={100} />
                        </td>
                    </tr>
                    <p></p>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assignment-group" className="me-2">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-select-assignment-group" className="form-select">
                                <option selected value="ASSIGNMENTS">ASSIGNMENTS </option>
                            </select>
                        </td>
                    </tr>
                    <p></p>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-grade" className="me-2">Display Grade as </label>
                        </td>
                        <td>
                            <select id="wd-select-grade-type" className="form-select">
                                <option selected value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                            </select>
                        </td>
                    </tr>
                    <p></p>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission" className="me-2">Submission Type</label>
                        </td>
                        <td className="border p-3">
                            <select id="wd-select-submission-type" className="form-select">
                                <option selected value="Online">Online</option>
                                <option value="In-person">In-person</option>
                            </select>
                            <p></p>
                            <div id="wd-online-options">
                                <label>Online Entry Options:</label><br />
                                <div className="form-check">
                                    <input type="checkbox" name="check-online-options" id="wd-chkbox-text" className="form-check-input" />
                                    <label htmlFor="wd-chkbox-text" className="form-check-label"> Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" name="check-online-options" id="wd-chkbox-website" className="form-check-input"/>
                                    <label htmlFor="wd-chkbox-website" className="form-check-label">  Website URL</label>
                                </div>
                                
                                <div className="form-check">
                                    <input type="checkbox" name="check-online-options" id="wd-chkbox-recordings" className="form-check-input"/>
                                    <label htmlFor="wd-chkbox-recordings" className="form-check-label"> Media Recordings</label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" name="check-online-options" id="wd-chkbox-annotations" className="form-check-input"/>
                                    <label htmlFor="wd-chkbox-annotations" className="form-check-label"> 
                                    Student Annotations
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" name="check-online-options" id="wd-chkbox-uploads" className="form-check-input"/>
                                    <label htmlFor="wd-chkbox-uploads" className="form-check-label"> File Uploads</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <p></p>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign" className="me-2">Assign</label>
                        </td>
                        <td valign="top" id="wd-assign">
                            <label htmlFor="wd-assign-to" className="mb-2">Assign to</label> <br />
                            <input type="text" id="wd-assign-to" defaultValue={"Everyone"}  className="form-control"/>
                            <p></p>
                            <label htmlFor="wd-due-date" className="mb-2">Due</label> <br />
                            <input type="date" id="wd-due-date" defaultValue={"05/13/2024"} />
                            <p></p>
                            <td>
                                <label htmlFor="wd-available-from" className="mb-2">Available from</label><br />
                                <input className="me-2" type="date" id="wd-available-from" defaultValue={"05/06/2024"} />
                            </td>
                            <td> <label htmlFor="wd-available-until" className="mb-2">Until</label><br />
                                <input type="date" id="wd-available-until" defaultValue={"05/20/2024"} /></td>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><hr /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="right">
                            <td><button className="btn btn-secondary me-2" id="wd-cancel" onClick={() => alert("Are you sure?")} type="button">
                                Cancel
                            </button> </td>
                            <td><button className="btn btn-success" id="wd-save" onClick={() => alert("Saved!")} type="button">
                                Save
                            </button></td>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
