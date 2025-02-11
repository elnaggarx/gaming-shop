import React from 'react'
import Product from '../components/Product/Product'
import pink from "../assets/pink.png"
import RelatedItems from '../components/RelatedItems/RelatedItems'
const ProductDetails = () => {
  return (
    <div className='product-details'>
        <p className='page-title'><span>Home /</span> Havic HV G-92 Gamepad</p>

        <Product></Product>
        <div className='related-item-header'>
            <img src={pink} alt="error" />
            <p>
                Related Item
            </p>
        </div>
        <RelatedItems></RelatedItems>

    </div>
  )
}

export default ProductDetails
