import React from 'react'
import pink from "../../assets/pink.png"
import "./ourProductsStyles.css";
import products from '../../products/ourProducts.js';
import ProductCard from '../ProductCard/ProductCard';
const OurProducts = () => {
  return (
    <div className='our-products'>
                <div className='day'>
            <img src={pink} alt="error" />
            <p>Our Products</p>
        </div>
        <div className='flash-sale-flexone'>
            <div className='flash-sale-header' style={{marginTop:20}}>
                <h1>Explore Our Products</h1>
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

        <div className='our-products-grid'>
            {products.map((item)=>{
                return <ProductCard w={"100%"} image={item.image} id={item.id} name={item.name} 
                reviews={item.reviews} noOfReviews={item.nOfReviews}  priceAfter={item.priceAfter} priceBefore={item.priceBefore}
                ></ProductCard>
            })}
        </div>
        <div className='flash-sale-cta-container'>
            <button className='flash-sale-cta'>
            View All Products
            </button>
        </div>
    </div>
  )
}

export default OurProducts
