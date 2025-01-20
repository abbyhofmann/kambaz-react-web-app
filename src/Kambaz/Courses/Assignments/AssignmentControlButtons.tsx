import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span
        className="bg-light border"
        style={{ borderRadius: "20px", padding: "0.25rem 0.75rem", fontSize: "1.1rem" }}
      >
        40% of Total
      </span>
      <BsPlus className="fs-3"/>
      <IoEllipsisVertical className="fs-4"/>
    </div>
);}
