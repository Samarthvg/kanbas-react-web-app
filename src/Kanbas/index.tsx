import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
function Kanbas() {
    return (
        <div className="wd-kanbas">
            <div className="d-flex">
                <div>
                    <KanbasNavigation />
                </div>
                <div className="flex-fill p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:cid/*" element={<Courses />} />
                    </Routes>
                </div>
            </div>

        </div>
    )
}
export default Kanbas;
