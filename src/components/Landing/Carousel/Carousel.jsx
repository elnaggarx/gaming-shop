import React from 'react'
import apple from "../../../assets/apple.png";
import iphone14 from "../../../assets/iphone14.png";
import "./carouselStyles.css"
const Carousel = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel'>
            <div className='carousel-slide'>
                <div className='text-container'>
                    <div className='carousel-product'>
                        <img src={apple} alt="apple" className='carousel-logo'/>
                        <p>iPhone 14 Series</p>

                    </div>
                    <h1 className='carousel-offer'>Up to 10% off Voucher</h1>
                    <p className='carousel-cta'>Shop Now <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </p>
                </div>
                <img src={iphone14} alt="iphone-14" />
            </div>
        </div>
    </div>
  )
}

export default Carousel
