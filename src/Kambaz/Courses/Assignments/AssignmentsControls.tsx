import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function AssignmentsControls() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate(); 
    const { cid } = useParams();

    return (
        <div id="wd-assignments-controls" className="d-flex align-items-center float-end">
            {/* search bar */}
            <div id="wd-search-assignments-form" className="d-flex align-items-center position-relative me-1" style={{ maxWidth: "300px" }}>
                <FaSearch
                    className="position-absolute text-muted"
                    style={{ left: "10px" }}
                />
                <input
                    type="text"
                    className="form-control ps-4"
                    placeholder="Search..."
                />
            </div>
            {/* + group button */}
            {currentUser.role === "FACULTY" &&
                <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>}
            {/* + assignment button */}
            {currentUser.role === "FACULTY" &&
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>}
        </div>
    )
}