import React from 'react'

const NumbersCard = (props) => {
  return (
    <div style={{backgroundColor:props?.pink && "#DB4444"}}>
            
            <div style={ {borderColor:props?.pink && "#d7d7d7",backgroundColor:props?.pink && "white"}}>
                <img src={props.icon} alt="error" />
            </div>
            <h3 style={{color:props?.pink && "white"}}>{props.number}</h3>
            <p style={{color:props?.pink && "white"}}>{props.text}</p>
       
    </div>
  )
}

export default NumbersCard
