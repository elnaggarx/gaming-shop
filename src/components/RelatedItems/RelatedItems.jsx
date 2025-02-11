import React from 'react'
import "./relatedItemsStyles.css"
import relatedProducts from '../../products/relatedProducts'
import ProductCard from '../ProductCard/ProductCard'
const RelatedItems = () => {
  return (
    <div className='related-items'>
        {relatedProducts.map((item)=>{
            return <ProductCard image={item.image} name={item.name} key={item.id} priceAfter={item.priceAfter} discountPercentage={item.discountPercentage} priceBefore={item.priceBefore}  discont={item.discount} reviews={item.reviews} noOfReviews={item.nOfReviews}></ProductCard>
        })}
    </div>
  )
}

export default RelatedItems
