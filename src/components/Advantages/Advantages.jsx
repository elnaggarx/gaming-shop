import React from 'react'
import "./advantagesStyles.css"
import delivery from "../../assets/delivery.png"
import support from "../../assets/support.png"
import moneyBack from "../../assets/moneyback.png"
const Advantages = () => {
  return (
    <div className='advantages'>
        
        <div>
            <div>
                <img src={delivery} alt="error" />
            </div>
            <h6>FREE AND FAST DELIVERY</h6>
            <p>Free delivery for all orders over $140</p>
        </div>
        <div>
            <div>
                <img src={support} alt="error" />
            </div>
            <h6>24/7 CUSTOMER SERVICE</h6>
            <p>Friendly 24/7 customer support</p>
        </div>
        <div>
            <div>
                <img src={moneyBack} alt="error" />
            </div>
            <h6>MONEY BACK GUARANTEE</h6>
            <p>We return money within 30 days</p>
        </div>
       
    </div>
  )
}

export default Advantages
