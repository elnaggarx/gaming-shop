import React from 'react'
import "./signUpStyles.css"
import image from "../../assets/signup.png"
import google from "../../assets/google.png"
const SignUp = () => {
  return (
    <div className='register'>
        <div className='image-container'> 
            <img src={image} alt="error" />
        </div>
        
        <div className='right'>
            <h1>
                Create an account
            </h1>
            <p>Enter your details below</p>

            <div className='register-input-container'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email or Phone Number' />
                <input type="text" placeholder='Password' />
            </div>

            <button className='create-account-button'>Create Account</button>
            <button className='signup-button'><div><img src={google} alt="error" /> <p>Sign up with Google</p></div></button>
            <p className='already'>Already have account? <span><a className='login-cta' href="#">Log in</a></span></p>
        </div>
        
    </div>

  )
}

export default SignUp
