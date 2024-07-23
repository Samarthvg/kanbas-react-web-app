import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    })
    const [module, setModule] = useState({
        id: "M1", name: "Backend Basics",
        description: "Getting started with NodeJS",
        course: "Web Development"
    })
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a className="btn btn-primary float-end" id="wd-update-assignment-title" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>Update Title</a>
            <input type="text" className="form-control w-75" id="wd-assignment-title" value={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
            } />
            <hr />

            <div className="d-flex">
                <div className="pe-5 border-end">
                    <input type="number" className="form-control " id="wd-assignment-score" value={assignment.score} onChange={(e) =>
                        setAssignment({ ...assignment, score: parseInt(e.target.value) })
                    } />
                    <br />
                    <a className="btn btn-primary " id="wd-update-assignment-score" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>Update Score</a>

                </div>

                <div className="ps-5">
                    <h5>Check below to Update Completed</h5>
                    <br />
                    <input type="checkbox" className="form-check-input me-2" id="wd-completed" checked={assignment.completed} onChange={(e) => {
                        setAssignment({ ...assignment, completed: e.target.checked })
                    }} />
                    <a className="btn btn-danger" id="wd-update-completed" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>Update Completed</a>

                </div>
            </div>

            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr />
            <h4>Retreving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>Get Assignment Title</a>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td className="border-end">
                            <h4 className="me-5">Get Module</h4>
                            <a href={`${REMOTE_SERVER}/lab5/module`} id="wd-retrieve-module" className="btn btn-primary me-3">Get Module</a>
                        </td>
                        <td>
                            <h4 className="ms-5">Retrieve Module Name</h4>
                            <a href={`${REMOTE_SERVER}/lab5/module/name`} id="wd-retrieve-module-name" className="btn btn-primary ms-5">Get Module Name</a></td>
                    </tr>
                </tbody>

            </table>
            <hr />
            <h4>Modifying Module</h4>
            <a className="btn btn-primary float-end" id="wd-update-module-name" href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>Update Name</a>
            <input type="text" className="form-control w-75" id="wd-module-name" value={module.name} onChange={(e) =>
                setModule({ ...module, name: e.target.value })
            } />
            <hr />
            <textarea className="form-control w-25" name="module-description" id="wd-module-description" value={module.description}
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                }
            />
            <br />
            <a className="btn btn-primary " id="wd-update-module-description" href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>Update Description</a>
            <hr />
        </div>
    );
}
