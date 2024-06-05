import { BsGripVertical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentButton from "./AssignmentButton";
import { BsPlusLg } from "react-icons/bs";
export default function Assignments() {
    return (
      <div id="wd-assignments"> 
        <div className="assignment-form align-items-center mt-3">
            <input id="wd-search-assignment" className="d-inline p-2 form-control" placeholder="Search..." style={{maxWidth:"600px"}} />
            <div className="wd-assignment-btn float-end d-none d-xl-block">
              <button className="wd-add-assignment-group btn btn-lg btn-secondary me-1 rounded-2"><BsPlusLg/> Group</button>
              <button className="wd-add-assignment btn btn-lg btn-danger text-white rounded-2 "><BsPlusLg/> Assignment</button>
            </div>
        </div>
        <br /><br /><br />
        <div className="wd-assignment-content border-gray">
        <div className="wd-assignments-title rounded-0 p-3 ps-2 bg-secondary">
        
          <h3 className="d-inline"> <BsGripVertical/>ASSIGNMENTS</h3>
      
          <div className="wd-weightage float-end">
            <span className="wd-weight border-gray p-2 rounded-5 me-2 fs-5">40% of total </span>
          <AssignmentButton/>
          </div>
        </div>
          <ul className="wd-assignment-list list-group list-unstyled rounded-0 border-5 border-start border-success">
      
            <li className="wd-assignment-list-item list-group-item p-3 ps-2">
            <BsGripVertical/>
           <span className="float-left text-success me-2">  <TfiWrite/></span>
              <a className="wd-assignment-link text-black text-decoration-none ps-1"
                href="#/Kanbas/Courses/1234/Assignments/123">
                              A1 - ENV + HTML
            </a>  <AssignmentControlButtons/>
            <div className="wd-assignment-details ms-5">
              <span className="wd-module-type text-danger">Multiple Modules</span> |
              <span className="wd-start-date"> <b>Not avaiable until</b> May 6 at 12:00 am</span> |
              <span className="wd-end-date"><b> Due</b> May 13 at 11:59pm</span> |
              <span className="wd-points"> 100 pts</span>
            </div>
          
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-2">
            <BsGripVertical/>
          <span className="float-left text-success me-2">  <TfiWrite/></span>
              <a className="wd-assignment-link text-black text-decoration-none ps-1"
                href="#/Kanbas/Courses/1234/Assignments/123">
                              A2 - CSS + BOOTSTRAP
            </a>  <AssignmentControlButtons/>
            <div className="wd-assignment-details ms-5">
              <span className="wd-module-type text-danger">Multiple Modules</span> |
              <span className="wd-start-date"> <b>Not avaiable until</b> May 13 at 12:00 am</span> |
              <span className="wd-end-date"><b> Due</b> May 20 at 11:59pm</span> |
              <span className="wd-points"> 100 pts</span>
            </div>
          
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-2">
            <BsGripVertical/>
          <span className="float-left text-success me-2">  <TfiWrite/></span>
              <a className="wd-assignment-link text-black text-decoration-none ps-1"
                href="#/Kanbas/Courses/1234/Assignments/123">
                              A3 - JAVASCRIPT + REACT 
            </a>  <AssignmentControlButtons/><br />
            <div className="wd-assignment-details ms-5">
              <span className="wd-module-type text-danger">Multiple Modules</span> |
              <span className="wd-start-date"> <b>Not avaiable until</b> May 20 at 12:00 am</span> |
              <span className="wd-end-date"><b> Due</b> May 27 at 11:59pm</span> |
              <span className="wd-points"> 100 pts</span>
            </div>
          
          </li>
                </ul>
        </div>
    </div>
);}
