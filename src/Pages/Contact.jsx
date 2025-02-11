import React from 'react'
import call from "../assets/call.png"
import message from "../assets/messagewhite.png"
const Contact = () => {
  return (
    <div className='contact-us'>
        <p className='page-title'><span>Home /</span> Contact</p>
        <div className='contact-flex'>
            <div className='contact-left-container'>
                <div className='call-to-us'>
                    <div className='call-to-us-header'>
                        <div className='contact-icon-container'>
                            <img src={call} alt="error" />
                        </div>
                        <p>Call To Us</p>
                    </div>
                    <div className='contact-info-container'>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                </div>
                <hr />
                <div className='write-to-us'>
                    <div className='write-to-us-header'>
                        <div className='contact-icon-container'>
                            <img src={message} alt="error" />
                        </div>
                        <p>Write To Us</p>
                    </div>
                    <div className='contact-info-container'>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>
                        Emails: support@exclusive.com
                        </p>
                    </div>
                </div>
            </div>
            <div className='contact-right-container'>

                    <input className='your-name-input-field' type="text" placeholder='Your Name'/>
                    <input className='your-email-input-field'  type='text' placeholder="Your Email" />
                    <input className='your-phone-input-field' type='text' placeholder="Your Phone" />
                    <input className='your-message-input-field' type="text" placeholder='Your Message' />
                    <div className='send-message-button-container'>
                        <button className='send-message-button'>Send Message</button>
                    </div>


            </div>
        </div>
    </div>
  )
}

export default Contact
