import React from 'react'
import "./teamStyles.css"
import MemberCard from './MemberCard'
import image1 from "../../assets/person1.png"
import image2 from "../../assets/person2.png"
import image3 from "../../assets/person3.png"

const Team = () => {
  return (
    <div className='team'>

        <div className='team-flex-container'>
            <MemberCard name="Tom Cruise" title="Founder & Chairman" image={image1} def="person1"></MemberCard>
            <MemberCard name="Emma Watson" title="Managing Director" image={image2} def="person2"></MemberCard>
            <MemberCard name="Will Smith" title="Product Designer" image={image3} def="person3"></MemberCard>
        </div>
        <div className='radio-buttons-container'>
            <div className='radio-button'>

            </div>
            <div className='radio-button'>

            </div>
            <div className='radio-button' id="selected">

            </div>
            <div className='radio-button'>

            </div>
            <div className='radio-button'>

            </div>
        </div>
    </div>
  )
}

export default Team
