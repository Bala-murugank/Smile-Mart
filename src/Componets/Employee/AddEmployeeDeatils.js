import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchUser, addUser } from "../Redux/Actions/employeeActions";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const AddEmployeeDeatils = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [userLoginPopUp, setUserLoginPopUp] = useState(false)

  const askUserLoginShow = () =>setUserLoginPopUp(true)
  const askUserLoginClose =() => setUserLoginPopUp(false)

  const dispatch = useDispatch();
  const navigateTo = useNavigate()
  const userAuth = useSelector(state => state.userLogin.Auth)
  

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  

  const addUserDetails = (data) => {
    //event.preventDefault()
    dispatch(addUser(data));
    dispatch(fetchUser());
    toast.success("new user data has been added sucessfully...");

  };

  const askUserToLogIn = (event)=>{
       
         event.preventDefault()
       
        askUserLoginShow()
 }

  return (
    <>
      <Button variant="info" onClick={(event)=>
          userAuth ? handleShow() : askUserToLogIn(event)}>
        +ADD USER
      </Button>

      <Modal
        show={show}
        onHide={() => {
          handleClose();
          reset();
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            handleClose();
            addUserDetails(data);
            reset();
          })}
        >
          <Modal.Body className="d-flex flex-column gap-2">
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
            </Form.Group>
            {errors?.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
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
                })}
                placeholder="+91 1234567890"
              />
            </Form.Group>
            {errors?.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", {
                  required: "phone can't be empty",
                  minLength: {
                    value: 8,
                    message: "phone number should be 10 digit",
                  },
                })}
                placeholder="password"
              />
            </Form.Group>
            {errors?.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="submit">
              ADD EMPLOYEE
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

export default AddEmployeeDeatils;
