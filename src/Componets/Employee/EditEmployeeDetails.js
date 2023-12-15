import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch,useSelector } from "react-redux";
import { fetchUser, editUser } from "../Redux/Actions/employeeActions";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

const EditEmployeeDetails = ({ editEmployee }) => {
  const [show, setShow] = useState(false);



  const [userLoginPopUp, setUserLoginPopUp] = useState(false)

  const userAuth = useSelector(state => state.userLogin.Auth)

  const askUserLoginShow = () =>setUserLoginPopUp(true)
  const askUserLoginClose =() => setUserLoginPopUp(false)
   const navigateTo = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: editEmployee.name,
      email: editEmployee.email,
      phone: editEmployee.phone,
      password: editEmployee.password,
    },
  });

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editUserdetails = (data) => {
    handleClose();
    dispatch(editUser(editEmployee.id, data));

    dispatch(fetchUser());
    toast.success("data has been updated sucessfully...");
  };


  const askUserToLogIn = (event)=>{
       
         event.preventDefault()
       
        askUserLoginShow()
 }

  return (
    <>
      <Button variant="primary" onClick={(event)=>{
        userAuth? handleShow() : askUserToLogIn(event)}}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>

        <Form
          onSubmit={handleSubmit((data) => {
            editEmployee.name !== data.name ||
            editEmployee.email !== data.email ||
            editEmployee.phone !== data.phone ||
            editEmployee.password !== data.password
              ? editUserdetails(data)
              : handleClose();
          })}
        >
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              {errors?.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
              <Form.Control
                type="text"
                {...register("name", { required: "User name can't be empty" })}
                placeholder="user name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  required: "email can't be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                placeholder="name@example.com"
              />
              {errors?.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                {...register("phone", {
                  required: "phone can't be empty",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "phone number shoud be digit",
                  },
                  minLength: {
                    value: 10,
                    message: "phone number should be 10 digit",
                  },
                  MaxLength: {
                    value: 10,
                    message: "phone number should be 10 digit",
                  },
                })}
                placeholder="+91 1234567890"
              />
              {errors?.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                {...register("password", {
                  required: "password can't be empty",
                  minLength: {
                    value: 8,
                    message: "phone number should be 8 digit",
                  },
                })}
                placeholder="password"
              />
              {errors?.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </Form.Group> */}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


      <Modal show={userLoginPopUp} onHide={askUserLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>User need to login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login and continue the employee actioin..</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={askUserLoginClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => {
            askUserLoginClose()
            navigateTo('/login')
            }}>
            login
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditEmployeeDetails;
