import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logonew} alt=''/>
            <p>Since 2022, we’ve been more than just a food delivery app. We’ve been your companion in late-night cravings, family dinners, and moments that matter, ensuring good food is always within reach.</p>
            <div className="footer-social-icons">
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.x_icon} alt=""/>                
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>  
            <ul>
                <li>+91-123-530-8857</li>
                <li>contact@SafeFoodDelivery.com</li>    
            </ul>      
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 @ SafeFoodDelivery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
