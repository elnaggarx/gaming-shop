import React from 'react'
import twitter from "../../assets/twitterblack.png"
import instagram from "../../assets/instagramblack.png"
import linkedin from "../../assets/linkedinblack.png"
const MemberCard = (props) => {
  return (
    <div className='member-card'>
        <div className='image-container'>
            <img id={props.def} src={props.image} alt="error" />
        </div>
        <div>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
            <div className='member-card-socials'>
                <img src={twitter} alt="error" />
                <img src={instagram} alt="error" />
                <img src={linkedin} alt="error" />

            </div>
        </div>
    </div>
  )
}

export default MemberCard
