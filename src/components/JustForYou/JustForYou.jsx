import React from 'react'
import justForYouProducts from '../../products/justForYouProducts'
import ProductCard from '../ProductCard/ProductCard'
import "./justForYouStyles.css"
const JustForYou = () => {
  return (
    <div className='just-for-you'>
        {justForYouProducts.map((item)=>{
            return <ProductCard image={item.image} name={item.name} key={item.id} priceAfter={item.priceAfter} discountPercentage={item.discountPercentage} priceBefore={item.priceBefore}  discont={item.discount} reviews={item.reviews} noOfReviews={item.nOfReviews}></ProductCard>
        })}
    </div>
  )
}

export default JustForYou
