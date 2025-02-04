import React from 'react'
import "./saleBannerStyles.css";
import jbl from "../../assets/jbl.png"
import blur from "../../assets/blur.png"

const SaleBanner = () => {
  return (
    <div className='sale-banner'>

        <div className='sale-banner-inner'>
            
            <div className='sale-banner-left'>
                <p className='on-sale-cat'>Categories</p>
                <h1>Enhance Your Music Experience</h1>
                <div className='sale-banner-time-left'>
                    <div>
                        <p className='number'>23</p>
                        <p>Hours</p>
                    </div>
                    <div>
                        <p className='number'>05</p>
                        <p>Days</p>
                    </div>
                    <div>
                        <p className='number'>59</p>
                        <p>Minutes</p>
                    </div>
                    <div>
                        <p className='number'>35</p>
                        <p>Seconds</p>
                    </div>
                </div>
                <button>
                    Buy Now!
                </button>
            </div>

            <div className='sale-banner-right'>
                <img className='on-sale-item' src={jbl} alt="error" />
                <img className='blur' src={blur} alt="error" />
            </div>
        </div>

    </div>
  )
}

export default SaleBanner
