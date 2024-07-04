import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, addAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const navigate = useNavigate();
    const assignments = useSelector((state:any) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();

    const assignment = assignments ? assignments.find((assignment: any) => assignment._id === aid) : null;
    console.log(assignment);

    const [formState, setFormState] = useState({
        title: assignment?.title || "",
        description: assignment?.description || "",
        points: assignment?.points || "",
        dueDate: assignment?.dueDate || "",
        availableFrom: assignment?.availableFrom || "",
        availableUntil: assignment?.availableUntil || "",
        gradeType: assignment?.gradeType || "Percentage",
        submissionType: assignment?.submissionType || "Online",
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    const handleSave = () => {
        if (assignment) {
            dispatch(updateAssignment({ ...assignment, ...formState }));
            alert("Saved!");
        } else {
            const newAssignment = {
                ...formState,
                course: cid,
                _id: new Date().getTime().toString(),
            };
            dispatch(addAssignment(newAssignment));
            alert("Added");
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        if (window.confirm("Are you sure?")) {
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
        }
    };

    return (
        <div id="wd-assignments-editor">
            <form className="assignment-editor" style={{ maxWidth: "600px" }}>
                <label htmlFor="title" className="mb-2">Assignment Name</label><br />
                <input
                    id="title"
                    className="form-control"
                    value={formState.title}
                    onChange={handleChange}
                /> <br />
                <textarea
                    id="description"
                    className="form-control"
                    value={formState.description}
                    onChange={handleChange}
                />
                <p></p>
                <table>
                    <tbody>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="points" className="me-2">Points</label>
                            </td>
                            <td>
                                <input
                                    id="points"
                                    className="form-control"
                                    value={formState.points}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <p></p>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="assignment-group" className="me-2">Assignment Group</label>
                            </td>
                            <td>
                                <select
                                    id="assignment-group"
                                    className="form-select"
                                    value="ASSIGNMENTS"
                                    onChange={handleChange}
                                >
                                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                </select>
                            </td>
                        </tr>
                        <p></p>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="gradeType" className="me-2">Display Grade as</label>
                            </td>
                            <td>
                                <select
                                    id="gradeType"
                                    className="form-select"
                                    value={formState.gradeType}
                                    onChange={handleChange}
                                >
                                    <option value="Percentage">Percentage</option>
                                    <option value="Points">Points</option>
                                </select>
                            </td>
                        </tr>
                        <p></p>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="submissionType" className="me-2">Submission Type</label>
                            </td>
                            <td className="border p-3">
                                <select
                                    id="submissionType"
                                    className="form-select"
                                    value={formState.submissionType}
                                    onChange={handleChange}
                                >
                                    <option value="Online">Online</option>
                                    <option value="In-person">In-person</option>
                                </select>
                            </td>
                        </tr>
                        <p></p>
                        <tr>
                            <td align="right" valign="top">
                                <label htmlFor="assign-to" className="me-2">Assign</label>
                            </td>
                            <td valign="top">
                                <label htmlFor="assign-to" className="mb-2">Assign to</label> <br />
                                <input
                                    type="text"
                                    id="assign-to"
                                    defaultValue="Everyone"
                                    className="form-control"
                                />
                                <p></p>
                                <label htmlFor="dueDate" className="mb-2">Due</label> <br />
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dueDate"
                                    value={formState.dueDate}
                                    onChange={handleChange}
                                />
                                <p></p>
                                <td>
                                    <label htmlFor="availableFrom" className="mb-2">Available from</label><br />
                                    <input
                                        className="me-2 form-control"
                                        type="date"
                                        id="availableFrom"
                                        value={formState.availableFrom}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="availableUntil" className="mb-2">Until</label><br />
                                    <input
                                        type="date"
                                        className="me-2 form-control"
                                        id="availableUntil"
                                        value={formState.availableUntil}
                                        onChange={handleChange}
                                    />
                                </td>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><hr /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="right">
                                <button
                                    type="button"
                                    className="btn btn-secondary me-2"
                                    id="wd-cancel"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    id="wd-save"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
