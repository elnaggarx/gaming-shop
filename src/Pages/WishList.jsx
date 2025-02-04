import React from 'react'
import pink from '../assets/pink.png'
const WishList = () => {
  return (
    <div className='wishlist'>
        <div>
            <p>Wishlist (4)</p>
            <button>Move All To Bag</button>
        </div>




        <div>
            <div>
                <img src={pink} alt="error" />
                <p>
                Just For You
                </p>
            </div>
            <button>See All</button>
        </div>
    </div>
  )
}

export default WishList
