import React from 'react'
import "./BestSellingStyles.css"
import pink from "../../assets/pink.png";
import ProductCard from '../ProductCard/ProductCard';
import products from '../../products/bestProducts.js';
const BestSelling = () => {
    
  return (
    <div className='best-selling'>
            <>
    <div className='flash-sale' id='padRight'>
        <div className='day'>
            <img src={pink} alt="error" />
            <p>This Month</p>
        </div>
        <div className='flash-sale-flexone'>
            <div className='flash-sale-header' style={{marginTop:20}}>
                <h1>Best Selling Products</h1>
            </div>
        </div>
        <div className='flash-sale-slider'>
            {products.map((item)=>{
                return <ProductCard w={"23%"} image={item.image} id={item.id} name={item.name} 
                reviews={item.reviews} noOfReviews={item.nOfReviews}  priceAfter={item.priceAfter} priceBefore={item.priceBefore}
                ></ProductCard>
            })}
        </div>

    </div>
    </>
    </div>
  )
}

export default BestSelling
