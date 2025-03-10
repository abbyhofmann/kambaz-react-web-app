import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import DeletePopup from "../Assignments/DeletePopup";
export default function LessonControlButtons(
  { assignmentId, deleteAssignment, showTrash }: { assignmentId: string, deleteAssignment: (assignmentId: string) => void, showTrash: boolean }
) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <div className="float-end">
      {showTrash && <FaTrash className="text-danger me-2 mb-1" onClick={handleShow} />}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeletePopup show={show} handleClose={handleClose} assignmentId={assignmentId} deleteAssignment={deleteAssignment} dialogTitle="Are you sure you want to delete this assignment?" />
    </div>
  );
}
