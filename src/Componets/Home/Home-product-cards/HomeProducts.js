import React from 'react'
import './homeproduct.css'

const HomeProducts = ({productInfo}) => {
  return (
    <>
    <div className="product_cards_formats">
        <div className="cards_formats_head">
          <img src={productInfo.image} alt="" />
        </div>

        <div className="cards-formats-body">
          <div className="cards-formats-body-contents">
            <div>
              <h4>{productInfo.title.split('',50)}</h4>
            </div>
            <div>
              <p>{productInfo.description.split('',70)}.</p>
            </div>
          </div>

          <div className="cards-formats-footer">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-currency-rupee"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>
                <span className="product-price">{productInfo.price}</span>
              </span>
            </div>
            <div className="cards-formats-action-buttons">
             
              <div>
                <button className="btn btn-info">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default HomeProducts
