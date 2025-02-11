import React from 'react'
import pink from '../assets/pink.png'
import JustForYou from '../components/JustForYou/JustForYou'
const WishList = () => {
  return (
    <div className='wishlist'>
        <div className='wishlist-header'>
            <p>Wishlist (4)</p>
            <button>Move All To Bag</button>
        </div>




        <div className='just-for-you-header'>
            <div>
                <img src={pink} alt="error" />
                <p>
                Just For You
                </p>
            </div>
            <button>See All</button>
        </div>
        <JustForYou></JustForYou>
    </div>
  )
}

export default WishList
