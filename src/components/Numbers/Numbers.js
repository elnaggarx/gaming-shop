import React from 'react'
import "./numbersStyles.css"
import NumbersCard from './NumbersCard'
import icon1 from "../../assets/Numbers1.png"
import icon2 from "../../assets/Numbers2.png"
import icon3 from "../../assets/Numbers3.png"
import icon4 from "../../assets/Numbers4.png"
const Numbers = () => {
  return (
    <div className='numbers'>
        <NumbersCard number="10.5k" text="Sallers active our site" pink={false} icon={icon1} ></NumbersCard>
        <NumbersCard number="33k" text="Monthly Produduct Sale" pink={true} icon={icon2}  ></NumbersCard>
        <NumbersCard number="45.5k" text="Customer active in our site" pink={false} icon={icon3} ></NumbersCard>
        <NumbersCard number="25k" text="Anual gross sale in our site" pink={false} icon={icon4} ></NumbersCard>
    </div>
  )
}

export default Numbers
