import React, { useEffect } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

import StartRating from "./StartRating";
import {
  fetchCartProductsAction,
  cartProductPriceDetails,
  cartProductQuantityIncrement,
  cartProductQuantityDecrement,
  getCartOfferPrice,
  getCartTotalPrice,
} from "../Redux/Actions/addToCartActions";
import RemoveToCart from "./RemoveTocart/RemoveToCart";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const initialCartItem = useSelector((state) => state.addToCart.cartItem);
  const initialCartItemPrice = useSelector(
    (state) => state.addToCart.cartProductPrice
  );

  const initialCartofferPrice = useSelector(
    (state) => state.addToCart.cartProductOfferPrice
  );
  const cartProductTotalPrice = useSelector(
    (state) => state.addToCart.cartProductTotalPrice
  );

  const dispatch = useDispatch();

  let deliveryCharge = 20;

  useEffect(() => {
    dispatch(fetchCartProductsAction());

    dispatch(cartProductPriceDetails());

    dispatch(getCartTotalPrice());
  }, [dispatch]);

  const offerPriceChecking = (price, discountPercentage) => {
    return Math.floor(price - (Math.floor(discountPercentage) / 100) * price);
  };

  return (
    <>
      <Container fluid>
        {initialCartItem.length === 0 ? (
          <h1 style={{ position: "relative", textAlign: "center" }}>
            No Item in cart<FaShoppingCart />...
          </h1>
        ) : (
          <div className="cartItem-cartProduct-priceDetails">
            <div className="d-flex flex-column gap-3 bala">
              {initialCartItem.map((cartProductItems) => (
                <Col key={cartProductItems.CartItem.id}>
                  <div className="cartItems">
                    <div className="cartItems-img-quantity">
                      <Row className="flex-column gap-2">
                        <Col>
                          <div className="cartItems-img">
                            <img
                              src={cartProductItems.CartItem.thumbnail}
                              alt="product cart items"
                            />
                          </div>
                        </Col>
                        <Col>
                          <div className="cartItems-quantity">
                            <>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  cartProductItems.quantity !== 1 &&
                                    dispatch(
                                      cartProductQuantityDecrement(
                                        cartProductItems.CartItem.id
                                      )
                                    );
                                  dispatch(cartProductPriceDetails());

                                  dispatch(getCartOfferPrice());
                                  dispatch(getCartTotalPrice());
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-dash"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                              </button>
                            </>
                            <>
                              <Form>
                                <Form.Control
                                  type="text"
                                  value={cartProductItems.quantity}
                                />
                              </Form>
                            </>

                            <>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  cartProductItems.quantity >= 1 &&
                                    dispatch(
                                      cartProductQuantityIncrement(
                                        cartProductItems.CartItem.id
                                      )
                                    );
                                  dispatch(cartProductPriceDetails());

                                  dispatch(getCartOfferPrice());
                                  dispatch(getCartTotalPrice());
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              </button>
                            </>
                          </div>
                        </Col>
                        <>
                          <RemoveToCart
                            removeID={cartProductItems.CartItem.id}
                          />
                        </>
                      </Row>
                    </div>

                    <div className="cartItems-tiltle-description-price">
                      <div className="product-title-delivery">
                        <div>
                          <h3>{cartProductItems.CartItem.title}</h3>
                        </div>
                        <div>
                          <h6>Delivery by Wed Dec 17 </h6>
                        </div>
                      </div>
                      <div className="product-description">
                        <h5>{cartProductItems.CartItem.description}</h5>
                      </div>

                      <div className="cartItems-descriptions">
                        <h4>Category: {cartProductItems.CartItem.category}</h4>
                      </div>
                      <div className="cartItem-Brand-start">
                        <div>
                          <h5>Brand: {cartProductItems.CartItem.brand}</h5>
                        </div>
                        <>
                          <div>
                            <StartRating
                              rating={cartProductItems.CartItem.rating}
                            />
                          </div>
                        </>
                      </div>
                      <>
                        <h4>Quantity : {cartProductItems.quantity}</h4>
                      </>

                      <div className="cartItems-price">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="30"
                            fill="currentColor"
                            className="bi bi-currency-dollar"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                          </svg>
                          <div>
                            <h4>
                              <s>{cartProductItems.CartItem.price}</s>
                            </h4>
                          </div>
                          <>
                            <h4 style={{ marginLeft: 10 }}>
                              {offerPriceChecking(
                                cartProductItems.CartItem.price,
                                cartProductItems.CartItem.discountPercentage
                              )}
                            </h4>
                          </>
                          <h6
                            style={{
                              textAlign: "center",
                              padding: 5,
                              color: "darkgreen",
                              fontSize: "1.1rem",
                            }}
                          >
                            {Math.floor(
                              cartProductItems.CartItem.discountPercentage
                            )}
                            % off
                          </h6>
                        </div>

                        <div className="cartItems-place-order">
                          <button>
                            <span>PLACE ORDER</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            <div className="price-details">
              <div>
                <h2>PRICE DETAILS</h2>
              </div>
              <div className="price-details-body">
                <div>
                  <>
                    <span>Price ({initialCartItem.length} items)</span>
                  </>
                  <div>
                    <span>${initialCartItemPrice}</span>
                  </div>
                </div>
                <div>
                  <>
                    <span>Discount</span>
                  </>
                  <>
                    <span>− ${initialCartofferPrice}</span>
                  </>
                </div>
                <div>
                  <>
                    <span>Delivery Charges</span>
                  </>
                  <>
                    <span>${`${deliveryCharge}`}</span>
                  </>
                </div>
              </div>
              <div className="price-details-total-price">
                <>
                  <h2>Total Amount</h2>
                </>
                <>
                  <span>${cartProductTotalPrice}</span>
                </>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
