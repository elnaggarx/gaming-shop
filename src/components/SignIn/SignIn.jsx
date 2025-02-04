import React from 'react'
import "./signInStyles.css"
import image from "../../assets/signup.png"

const SignIn = () => {
  return (
    <div className='sign-in'>
        <div className='image-container'> 
            <img src={image} alt="error" />
        </div>
        
        <div className='right'>
            <h1>
                Log in to Exclusive
            </h1>
            <p>Enter your details below</p>

            <div className='register-input-container'>
                <input type="text" placeholder='Email or Phone Number' />
                <input type="text" placeholder='Password' />
            </div>
            <div className='sign-in-flex'>
                <button className='sign-in-button'>Log In</button>
                <p>Forget Password?</p>
            </div>
        </div>
    </div>
  )
}

export default SignIn
