import React from 'react'
import pink from "../../assets/pink.png";
import "./flashesStyles.css"
import ProductCard from '../ProductCard/ProductCard';
import products from '../../products/products';
const Flashes = () => {
  return (
    <>
    <div className='flash-sale'>
        <div className='day'>
            <img src={pink} alt="error" />
            <p>Today's</p>
        </div>
        <div className='flash-sale-flexone'>
            <div className='flash-sale-header'>
                <h1>Flash Sales</h1>
                <div className='count-down'>
                    <p className='time-title days-title'>Days</p>
                    <p className='time-title hours-title'>Hours</p>
                    <p className='time-title minutes-title'>Minutes</p>
                    <p className='time-title seconds-title'>Seconds</p>
                    <p className='time-remaining days'>03</p>
                    <p className='colon1'>:</p>
                    <p className='time-remaining hours'>23</p>
                    <p className='colon2'>:</p>
                    <p className='time-remaining minutes'>19</p>
                    <p className='colon3'>:</p>
                    <p className='time-remaining seconds'>56</p>
                </div>
            </div>
            <div className='flashes-arrows-container'>
                <div className='left-arrow-container'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
            
                <div className='right-arrow-container'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='flash-sale-slider'>
            {products.map((item)=>{
                return <ProductCard image={item.image} key={item.id} id={item.id} name={item.name} priceAfter={item.priceAfter} priceBefore={item.priceBefore} 
                reviews={item.reviews} noOfReviews={item.nOfReviews} discountPercentage={item.discountPercentage}
                discount={item.discount}></ProductCard>
            })}
        </div>

    </div>
    <div className='flash-sale-cta-container'>
        <button className='flash-sale-cta'>
        View All Products
        </button>
    </div>
    </>
  )
}

export default Flashes
