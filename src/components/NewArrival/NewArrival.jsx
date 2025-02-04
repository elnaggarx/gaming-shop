import React from 'react'
import "./newArrivalStyles.css"
import pink from "../../assets/pink.png"
import ps5 from "../../assets/ps5.png"
import miniSpeaker from "../../assets/mini-speaker.png"
import woman from "../../assets/woman.png"
import gucci from "../../assets/gucci-intense.png"
const NewArrival = () => {
  return (
    <div className='new-arrival'>
        <div className='new-arrival-header'>
            <img src={pink} alt="error" className='pink'/>
            <p>Featured</p>
        </div>
        <h1>New Arrival</h1>
        <div className='new-arrival-grid'>
            <div className='playstation'>
                <img src={ps5} alt="error" />
                <div>
                    <h3>PlayStation 5</h3>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <a href="#">Shop Now</a>
                </div>
            </div>
            <div className='woman'>
                <img src={woman} alt="error" />
                <div>
                    <h3>Women’s Collections</h3>
                    <p>Featured woman collections that give you another vibe.</p>
                    <a href="#">Shop Now</a>
                </div>
            </div>
            <div className='mini-speaker'>
                <img src={miniSpeaker} alt="error" />
                <div>
                    <h3>Speakers</h3>
                    <p>Amazon wireless speakers</p>
                    <a href="#">Shop Now</a>
                </div>
            </div>
            <div className='gucci-perfume'>
                <img src={gucci} alt="error" />
                <div>
                    <h3>Perfume</h3>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NewArrival
