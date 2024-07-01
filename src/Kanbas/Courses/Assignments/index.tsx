
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { useParams } from "react-router";
import * as db from "../../Database";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentButton from "./AssignmentButton";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

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
          <button className="wd-add-assignment btn btn-lg btn-danger text-white rounded-2">
            <BsPlusLg /> Assignment
          </button>
        </div>
      </div>
      <br /><br /><br />
      <div className="wd-assignment-content border-gray">
        <div className="wd-assignments-title rounded-0 p-3 ps-2 bg-secondary">
          <h3 className="d-inline">
            <BsGripVertical /> ASSIGNMENTS
          </h3>
          <div className="wd-weightage float-end">
            <span className="wd-weight border-gray p-2 rounded-5 me-2 fs-5">
              40% of total 
            </span>
            <AssignmentButton />
          </div>
        </div>
        <ul className="wd-assignment-list list-group list-unstyled rounded-0 border-5 border-start border-success">
          {assignments
            .filter((assignment) => assignment.course === cid)
            .map((assignment) => (
              <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-2">
                <BsGripVertical />
                <span className="float-left text-success me-2">
                  <TfiWrite />
                </span>
                <a 
                  className="wd-assignment-link text-black text-decoration-none ps-1"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <AssignmentControlButtons />
                <div className="wd-assignment-details ms-5">
                  <span className="wd-module-type text-danger">Multiple Modules</span> |
                  <span className="wd-start-date">
                    <b> Not available until</b> {assignment.available_month} at {assignment.available_time}
                  </span> |
                  <span className="wd-end-date">
                    <b> Due</b> May 13 at 11:59pm
                  </span> |
                  <span className="wd-points">100 pts</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
