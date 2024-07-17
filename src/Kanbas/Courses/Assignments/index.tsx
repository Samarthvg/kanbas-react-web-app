import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { useParams } from "react-router";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentButton from "./AssignmentButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
  const dispatch = useDispatch();

  const handleDeleteAssignment = (assignmentId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  const totalPoints = assignments
  .filter((assignment: any) => assignment.course === cid)
  .reduce((sum: any, assignment: any) => sum + assignment.points, 0);

  const percentage = (totalPoints / 1000) * 100;
  return (
    <div id="wd-assignments">
      <div className="assignment-form align-items-center mt-3">
        <input
          id="wd-search-assignment"
          className="d-inline p-2 form-control"
          placeholder="Search..."
          style={{ maxWidth: "600px" }}
        />
        <div className="wd-assignment-btn float-end d-none d-xl-block">
          <button className="wd-add-assignment-group btn btn-lg btn-secondary me-1 rounded-2">
            <BsPlusLg /> Group
          </button>
          <Link to={`/Kanbas/Courses/${cid}/New`} className="wd-add-assignment btn btn-lg btn-danger text-white rounded-2">
            <BsPlusLg /> Assignment
          </Link>
        </div>
      </div>
      <br /><br /><br />
      <div className="wd-assignment-content border-gray">
        <div className="wd-assignments-title rounded-0 p-3 ps-2 bg-secondary">
          <h3 className="d-inline">
            <BsGripVertical /> ASSIGNMENTS
          </h3>
          <div className="wd-weightage float-end">
            <span className="wd-weight border-gray p-2 px-3 rounded-5 me-2 fs-5">
              {percentage}% of Total
            </span>
            <AssignmentButton />
          </div>
        </div>
        <ul className="wd-assignment-list list-group list-unstyled rounded-0 border-5 border-start border-success">
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-2">
                <BsGripVertical />
                <span className="float-left text-success me-2">
                  <TfiWrite />
                </span>
                <Link
                  className="wd-assignment-link text-black text-decoration-none ps-1"
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <AssignmentControlButtons
                  assignmentId={assignment._id}
                  onDelete={handleDeleteAssignment}
                />
                <div className="wd-assignment-details ms-5">
                  <span className="wd-module-type text-danger">Multiple Modules</span> |
                  <span className="wd-start-date">
                    <b> Not available until</b> {assignment.availableFrom || "N/A"} 
                  </span> |
                  <span className="wd-end-date">
                    <b> Due</b> {assignment.dueDate || "N/A"} 
                  </span> |
                  <span className="wd-points"> {assignment.points} pts</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
