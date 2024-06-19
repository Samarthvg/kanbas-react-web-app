import { CiSettings } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams();
    const enrollments = db.enrollments;
    const users = db.users;
    const grades = db.grades;
    const assignments = db.assignments;
    return (
        <div className="">
            <div className="text-end mb-3">
                <button className="btn btn-lg btn-secondary me-2"><LiaFileImportSolid className="me-2 fs-5" />Import</button>
                <button className="btn btn-lg btn-secondary me-2 dropdown-toggle" data-bs-toggle="dropdown"><LiaFileExportSolid className="me-2 fs-5" />Export</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Pdf File</li>
                    <li className="dropdown-item">Word File</li>

                </ul>
                <button className="btn btn-lg btn-secondary "><CiSettings className="fs-3" /></button>
            </div>
            <div className="row mb-3">
                <div className="col-6">
                    <label htmlFor="wd-search-students" className="mb-2">Student names</label>
                    <input id="wd-search-students" type="text" placeholder="Search Students" className="form-control" />
                </div>
                <div className="col-6">

                    <label htmlFor="wd-search-assignments" className="mb-2">Assignment Names</label>
                    <input id="wd-search-assignments" type="text" placeholder="Search Assignments" className="form-control" />

                </div>
            </div>
            <button className="btn btn-lg btn-secondary mb-3"> <CiFilter className="me-2 fs-5" />Apply filter</button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="align-middle">Student name</th>
                            {assignments
                                .filter((assignment) => assignment.course === cid)
                                .map((assignment) => (
                                    <td className="text-center">{assignment.title} <br /> <span>Out of {assignment.points}</span></td>
                                ))}
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {enrollments.filter((enrollment) => enrollment.course === cid).map((enrollment) =>
                            users.filter((user) => user._id === enrollment.user).map((user) => (
                                <tr key={user._id}>
                                    <td className="text-danger text-start">{user.firstName} {user.lastName}</td>
                                    {grades.filter((grade) => grade.student === user._id).map((grade) => (
                                        <td key={grade._id}>{grade.grade}%</td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}