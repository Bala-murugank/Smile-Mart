import React, { useEffect, useRef, useState } from "react";
import "./productInfo.css";
import {Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import axios from "axios";
import AddToCart from "../Cart/AddToCart/AddToCart";
const ProductInfo = () => {
  const { id } = useParams();
  const [moreInfoProduct, setMoreInfoProduct] = useState({});
  const [thumbImg, setThumbImg] = useState("");

  const imgActiveRef = useRef();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setMoreInfoProduct(response.data);
       
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  const selectThumbImg = (imgSrc, index) => {
    setThumbImg(imgSrc);
    const images = imgActiveRef.current.children;

    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  return (
    <>
      <Container>
        <div className="product-full-info">
          <div className="product-info-img">
            <img src={thumbImg ? thumbImg : moreInfoProduct.thumbnail} alt="product-thumbnail"/>
          </div>

          <div className="product-info-details">
            <div className="row">
              <div>
                <h1>{moreInfoProduct.title}</h1>
              </div>
              <div>
                <p>{moreInfoProduct.description}</p>
              </div>

              <div>
                <>
                 <h3>Category : {moreInfoProduct.category}</h3>
                </>
                <>
                 <h3>Brand : {moreInfoProduct.brand}</h3>
                </> 

              </div>
            </div>

            <div className="thumb" ref={imgActiveRef}>
              {moreInfoProduct.images?.map((imgSrc, index) => (
                <img key={index}
                  src={`${imgSrc}`}
                  onClick={() => selectThumbImg(imgSrc, index)}
                 alt="more thumbnail" />
              ))}
            </div>
            <div className="product-info-price-cart">
              <div className="d-flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg>
                </span>
                <span className="product-price">
                    {moreInfoProduct.price}
                </span>
              </div>
              <div>
                <AddToCart addToCart_product_Item={moreInfoProduct} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductInfo;
