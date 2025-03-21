import React from 'react'
import star from "../../assets/star.png"
import "./productCardStyles.css";
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='product-card' style={props.w && {width:props.w,marginLeft:0}}>
        <div className='image-container'>
          <img src={props.image} alt="error" />
          <button className='product-add-to-cart' onClick={()=>{dispatch(addItem({id:props.id,name:props.name,price:props.priceAfter,image:props.image,qty:1}))}}>Add To Cart</button>
        </div>
        <p className='product-name'>{props.name}</p>
        <p className='product-price'>${props.priceAfter} {props.priceBefore && <span className='before-discount'>${props.priceBefore}</span>}</p>
        <div className='product-review'>
          <div>
            <img src={star} alt="error" />
            <img src={star} alt="error" />
            <img src={star} alt="error" />
            <img src={star} alt="error" />
            <img src={star} alt="error" />
          </div>
          <p className='number-of-reviews'>({props.noOfReviews})</p>
        </div>
        <div className='ww-buttons-container'>
          <div className='w-button=container'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='w-button-container'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        </div>
        {props.discountPercentage && 
          <div className='discount-percentage'>
            <p>{props.discountPercentage}%</p>
        </div>
        }
        
    </div>
  )
}

export default ProductCard
