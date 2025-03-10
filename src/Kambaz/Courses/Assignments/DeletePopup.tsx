import { Modal, Button } from "react-bootstrap";
export default function DeletePopup({
  show,
  handleClose,
  assignmentId,
  deleteAssignment,
  dialogTitle,
}: {
  show: boolean;
  handleClose: () => void;
  assignmentId: string;
  deleteAssignment: (aId: string) => void;
  dialogTitle: string;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            deleteAssignment(assignmentId);
            handleClose();
          }}
        >
          {" "}
          Delete Assignment{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
