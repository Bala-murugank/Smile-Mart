import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  addToCartRemoveAction,
  fetchCartProductsAction,
  cartProductPriceDetails,
  getCartOfferPrice,
  getCartTotalPrice,
} from "../../Redux/Actions/addToCartActions";

const RemoveToCart = ({ removeID }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const removeTocart = (event) => {
    event.preventDefault();
    dispatch(addToCartRemoveAction(removeID));
    dispatch(fetchCartProductsAction());
    dispatch(cartProductPriceDetails());

    dispatch(getCartOfferPrice());
    dispatch(getCartTotalPrice());
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Remove
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Remove the cart Item</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(event) => {
              handleClose();
              removeTocart(event);
              //removeUser(deleteUserID)
            }}
          >
            Ok Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveToCart;
