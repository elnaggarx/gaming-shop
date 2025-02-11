import React from "react";
import image from "../../assets/ps5con.png"
import image1 from "../../assets/ps5con1.png"
import image2 from "../../assets/ps5con2.png"
import image3 from "../../assets/ps5con3.png"
import image4 from "../../assets/ps5con4.png"
import star from "../../assets/star.png"
import del from "../../assets/deliveryblack.png"
import ret from "../../assets/return.png"
import "./productStyles.css"
const Product = () => {
  return (
    <div className="product-details-flex">
      <div className="product-details-images-flex">
        <div className="product-detailes-images-left">
          <div className="image-container-det">
            <img src={image1} alt="error" />
          </div>
          <div className="image-container-det">
            <img src={image2} alt="error" />
          </div>
          <div className="image-container-det">
            <img src={image3} alt="error" />
          </div>
          <div className="image-container-det">
            <img src={image4} alt="error" />
          </div>

        </div>
        <div className="image-container-det">
            <img src={image} alt="error" />
        </div>
      </div>

      <div className="product-details-text">
        <h2>Havic HV G-92 Gamepad</h2>
        <div className="product-rating-flex">
          <div>
            <img src={star} alt="error" />
            <img src={star} alt="error" />
            <img src={star} alt="error" />
            <img src={star} alt="error" />
            <img src={star} alt="error" />
          </div>
          <p className="product-reviews-availability">
            (150 Reviews) | <span> In Stock </span>
          </p>
        </div>
        <p>$192.00</p>
        <p className="product-description">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <hr />
        <div className="product-colors">
          <p>Colours:</p>
          <div className="product-colors-container">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="product-sizes">
            <p>Sizes:</p>
           <div className="product-sizes-container">
                <div>
                    <p>XS</p>
                </div>
                <div>
                    <p>S</p>
                </div>
                <div>
                    <p>M</p>
                </div>
                <div>
                    <p>L</p>
                </div>
                <div>
                    <p>XL</p>
                </div>
            </div>
        </div>

        <div className="product-count-whish-flex">
          <div className="qty-container">
            <div className="minus">
              <p>-</p>
            </div>
            <div className="qty">
              <p>3</p>
            </div>
            <div className="plus">
              <p>+</p>
            </div>
          </div>
          <button className="product-buy-now">Buy Now</button>
          <div className="product-wishlist-container">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="del-ret-container">
          <div className="del-container">
            <img src={del} alt="error" />
            <div>
              <h6>Free Delivery</h6>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <hr />
          <div className="ret-container">
            <img src={ret} alt="error" />
            <div>
              <h6>Return Delivery</h6>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
