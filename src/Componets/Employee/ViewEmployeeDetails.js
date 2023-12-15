import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ViewEmployeeDetails = ({viewEmployee}) => {
        const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Button variant="info" onClick={handleShow}>
        View
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-2">
          <>
            <h2>ID: {viewEmployee.id}</h2>
            <h2>Name: {viewEmployee.name}</h2>
            <h2>Email: {viewEmployee.email}</h2>
            <h2>Phone: {viewEmployee.phone}</h2>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      
    </>
  )
}

export default ViewEmployeeDetails
