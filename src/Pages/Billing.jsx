import React from 'react'
import { useSelector } from 'react-redux'
import bank1 from "../assets/bank1.png"
import bank2 from "../assets/bank2.png"
import bank3 from "../assets/bank3.png"
import bank4 from "../assets/bank4.png"

const Billing = () => {
    const cartArray = useSelector((state)=>state.cart.cartArray)
  return (
    <div className='billing'>

        <p className='page-title'><span>Account / My Account / Product / View Cart / </span> Checkout</p>
        <div className='billing-main-container'>
            <h1 className='billing-title'>Billing Details</h1>
            <div className='billing-flex'>
                <div className='billing-details-container'>
                    <div className='billing-info-container'>
                        <p>First Name</p><input type="text" />
                    </div>
                    <div className='billing-info-container'>
                        <p>Company Name</p><input type="text" />
                    </div>
                    <div className='billing-info-container'>
                        <p>Street Address*</p><input type="text" />
                    </div>
                    <div className='billing-info-container'>
                        <p>Apartment, floor, etc. (optional)</p><input type="text" />
                    </div>
                    <div className='billing-info-container'>
                        <p>Town/City*</p><input type="text" />
                    </div>
                    <div className='billing-info-container'>
                        <p>Phone Number*</p><input type="text" />
                    </div>
                    <div className='billing-info-container'>
                        <p>Email Address*</p><input type="text" />
                    </div>
                    <div className='billing-info-check'>
                        <input type="checkbox" />
                        <p>
                        Save this information for faster check-out next time
                        </p>
                    </div>
                </div>

                <div className='billing-receipt'>
                    {cartArray.map((item)=>{
                        return <div className='billing-receipt-product-flex'>
                            <div><img src={item.image} alt="error" /><p>{item.name}</p></div>
                            <p>${item.price*item.qty}</p>
                        </div>
                    })}
                    <div className='billing-subtotal'>
                        <p>Subtotal:</p>
                        <p>$1750</p>
                    </div>
                    <div className='billing-shipping'>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div className='billing-total'>
                        <p>Total:</p>
                        <p>$1750</p>
                    </div>
                    <div>
                        <div className='bank-radio-flex'>
                            <div className='bank-radio'>
                                <input type='radio'></input>
                                <p>Bank</p>
                            </div>
                            <div className='banks-flex'>
                                <img src={bank1} alt="error" />
                                <img src={bank2} alt="error" />
                                <img src={bank3} alt="error" />
                                <img src={bank4} alt="error" />

                            </div>
                        </div>
                    
                        <div className='cash-radio'>
                            <input type='radio'></input>
                            <p>Cash On Delivery</p>
                        </div>
                        
                    </div>
                    <div className='billing-coupon-container'>
                        <input type="text" placeholder='Coupon Code' className='billing-coupon-field' />
                        <button>Apply Coupon</button>
                    </div>
                    <button className='place-order-button'>Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billing
