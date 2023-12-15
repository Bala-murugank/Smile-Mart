import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetchUser,deleteUser } from '../Redux/Actions/employeeActions';
import {toast} from 'react-toastify'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const DeleteEmployeeDetails = ({deleteUserID}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userLoginPopUp, setUserLoginPopUp] = useState(false)

  const userAuth = useSelector(state => state.userLogin.Auth)

  const askUserLoginShow = () =>setUserLoginPopUp(true)
  const askUserLoginClose =() => setUserLoginPopUp(false)
   const navigateTo = useNavigate()

   const dispatch = useDispatch()
  const removeUser = (removeUserID) =>{
    
            dispatch(deleteUser(removeUserID))
            dispatch(fetchUser())
           toast.success("User Item removed successfully!...")
}

const askUserToLogIn = (event)=>{
       
         event.preventDefault()
       
        askUserLoginShow()
 }

  return (
    <>
    <Button variant="danger" onClick={(event)=>
       userAuth? handleShow() : askUserToLogIn(event)}>
       Delete
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Emoployee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete the employee</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose()
            removeUser(deleteUserID)}}>
            Ok Delete
          </Button>
        </Modal.Footer>
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
  )
}

export default DeleteEmployeeDetails
