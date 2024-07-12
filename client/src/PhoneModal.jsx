import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PhoneAddForm from "./PhoneAddForm";

const PhoneModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Phone Number
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PhoneAddForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PhoneModal;
