import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {
    const cartArray = useSelector((state)=>state.cart.cartArray)
  return (
    <div className='cart'>
        <p className='page-title'><span>Home /</span> Cart</p>
        <div className='cart-table-container'>
            <table className='cart-inner'>
              
                <tr className='cart-header'>
                    
                        <td className='cart-product-title'>Product</td>
                        <td className='cart-price cart-price-header'>Price</td>
                        <td className='cart-qty cart-qt-header'>Quantity</td>
                        <td className='cart-subtotal cart-subtotal-header'>Subtotal</td>
                   
                </tr>
               
                
                {cartArray?.map((item)=>{
                    return <tr className='cart-item-container'> 
                        <td className='cart-product'><img src={item.image} alt="error" /><p>{item.name.slice(0,10)}..</p></td> 
                        <td className='cart-price align-center'>{item.price}$</td>
                        <td className='cart-qty'><div className='cart-qty-container'><p>{item.qty}</p>
                        <div>
                            <button>                            
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="black"/>
                                </svg>
                            </button>
                            <button>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                        </div></td>
                        <td className='cart-subtotal align-center'>{item.price*item.qty}$</td>
                    </tr>
                    
                })}
                
            </table>
            <div className='cart-button-container'>
                <Link to="/">  
                    <button className='cart-return-to-shop'>Return To Shop</button>
                </Link>
                <button className='cart-update'>Update Cart</button>
            </div>
            <div className='cart-receipt-flex'>
                <div className='cart-coupon-container'>
                    <input type="text" placeholder='Coupon Code'  className='coupon-contianer'/>
                    <button className='coupon-button'>Apply Coupon</button>

                </div>
                <div className='cart-receipt'>
                    <div className='cart-receipt-content'>
                        <h6>Cart Total</h6>
                        <div>
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <div>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div>
                            <p>Total:</p>
                            <p>$1750</p>
                        </div>
                    </div>
                    <div className='cart-receipt-button-container'>
                        <Link to="/billing"><button>Proceed to checkout</button></Link>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart
