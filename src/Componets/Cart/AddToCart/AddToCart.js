import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addToCartAddAction,getCartOfferPrice,cartProductPriceDetails } from "../../Redux/Actions/addToCartActions";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";

import {useNavigate} from 'react-router-dom'


const AddToCart = ({ addToCart_product_Item }) => {
  const [show, setShow] = useState(false);
  //const [added, setAdded] = useState(false);

  const [userLoginPopUp, setUserLoginPopUp] = useState(false)

  const inititalCartItem = useSelector((state) => state.addToCart.cartItem);
  const userAuth = useSelector(state => state.userLogin.Auth)
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const askUserLoginShow = () =>setUserLoginPopUp(true)
   const askUserLoginClose =() => setUserLoginPopUp(false)
 
    const navigateTo = useNavigate()

  const addTocartAddProduct = () => {
    if (!inititalCartItem.some((item) => item.CartItem.id === addToCart_product_Item.id)) {
      dispatch(addToCartAddAction(addToCart_product_Item));
      handleShow();
      //setAdded(true);
      dispatch(getCartOfferPrice())
      dispatch(cartProductPriceDetails())
    }

    
  };

  const askUserToLogIn = (event)=>{
       
         event.preventDefault()
       
        askUserLoginShow()
       
   

  }

  return (
    <>
      <Button
        variant="primary"
        onClick={(event) => {

          userAuth?addTocartAddProduct(event) : askUserToLogIn(event);
        }}
      >
        {(inititalCartItem.some((item) => item.CartItem.id === addToCart_product_Item.id)) ? "ADDED" : "ADD TO CART"}
        <BsFillCartCheckFill style={{textAlign:'center', fontSize:20}}/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD TO CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, your Item was added sucessfully..!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>

      </Modal>
      <Modal show={userLoginPopUp} onHide={askUserLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>User need to login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login and continue the shoping..</Modal.Body>
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

export default AddToCart;
