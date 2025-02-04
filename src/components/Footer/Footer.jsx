import React from 'react'
import send from "../../assets/send.png"
import "./footerStyles.css"
import qr from "../../assets/qr.png"
import googleplay from "../../assets/googleplay.png"
import appstore from "../../assets/appstore.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-exclusive'>
            <h3>Exclusive</h3>
            <h6>Subscribe</h6>
            <p>Get 10% off your first order</p>
            <div className='email-input-container'>
                <input type="text" placeholder='Enter your email' />
                <img src={send} alt="error" />
            </div>
        </div>

        <div className='footer-support'>
            <h6>Support</h6>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>

        <div className='footer-account'>
            <h6>Account</h6>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>

        <div className='footer-quick'>
            <h6>Quick Link</h6>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>

        <div className='footer-download'>
            <h6>Download App</h6>
            <p>Save $3 with App New User Only</p>
            <div className='footer-stores-links'>
                <img className='qr' src={qr} alt="error" />
                <img className='googleplay' src={googleplay} alt="error" />
                <img className='appstore' src={appstore} alt="error" />
            </div>
            <div className='footer-social-links'>
                <img src={facebook} alt="error" />
                <img src={twitter} alt="error" />
                <img src={instagram} alt="error" />
                <img src={linkedin} alt="error" />

            </div>
        </div>
    </div>
    <div className='copyright'><p>© Copyright Rimel 2022. All right reserved</p></div>
    </>
  )
}

export default Footer
