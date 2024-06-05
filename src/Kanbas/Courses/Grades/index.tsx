import { CiSettings } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";  
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
export default function Grades() {
    return (
        <div className="">
            <div className="text-end mb-3">
                <button className="btn btn-lg btn-secondary me-2"><LiaFileImportSolid className="me-2 fs-5" />Import</button>
                <button className="btn btn-lg btn-secondary me-2 dropdown-toggle" data-bs-toggle="dropdown"><LiaFileExportSolid className="me-2 fs-5" />Export</button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Pdf File</li>
                    <li className="dropdown-item">Word File</li>
                    
                </ul>
                <button className="btn btn-lg btn-secondary "><CiSettings className="fs-3"/></button>
            </div>
            <div className="row mb-3">
             <div className="col-6">
                 
                            <label htmlFor="wd-search-students" className="mb-2">Student names</label>
                            <input id="wd-search-students" type="text" placeholder="Search Students" className="form-control"  />
             </div>
             <div className="col-6">
                 
                            <label htmlFor="wd-search-assignments" className="mb-2">Assignment Names</label>
                     <input id="wd-search-assignments" type="text" placeholder="Search Assignments" className="form-control" />
                 
             </div>
                 
                
               
            </div>
            <button className="btn btn-lg btn-secondary mb-3"> <CiFilter className="me-2 fs-5"/>Apply filter</button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="align-middle">Student name</th>
                            <td className="text-center">A1 Setup <br /> <span>Out of 100</span></td>
                            <td className="text-center">A2 HTML <br /> <span>Out of 100</span></td>
                            <td className="text-center">A3 CSS <br /> <span>Out of 100</span></td>
                            <td className="text-center">A4 BOOTSTRAP <br /> <span>Out of 100</span></td>
                        </tr>
                        </thead>
                    <tbody className="text-center">
                        <tr>
                        <td className="text-danger text-start">Jane Adams</td>
                        <td>100%</td>
                        <td>96.67%</td>
                        <td>92.18%</td>
                        <td>66.22%</td>
                        </tr>
                        <tr>
                        <td className="text-danger text-start">Christina Adams</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        </tr>
                        <tr>
                        <td className="text-danger text-start">Samreen Ansari</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        </tr>
                        <tr>
                        <td className="text-danger text-start">Han Bao</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td><input type="number" className="form-control input-sm p-1 mx-auto text-center" placeholder="83%" min={0} max={100} style={{maxWidth:"150px"}}/></td>
                        <td>98.99%</td>
                        </tr>
                        <tr>
                        <td className="text-danger text-start">Mahi Sai Srinivas Bobbili</td>
                        <td>100%</td>
                        <td>96.67%</td>
                        <td>98.37%</td>
                        <td>100%</td>
                        </tr>
                        <tr>
                        <td className="text-danger text-start">Siren Cao</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}