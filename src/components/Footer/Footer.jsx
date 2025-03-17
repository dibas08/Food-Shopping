import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


function Footer() {
  return (
    <div className='Footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem Ipsum is simply text of the prinitng  </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9083712128</li>
                    <li>Contact@tomato.com</li>
                </ul>
            </div>
           
        </div>
        <hr/>
        <p className='fotter-copyright'>Copyright 2024 Tomato.com -- All Right Reserved ..</p>
    </div>
  )
}

export default Footer