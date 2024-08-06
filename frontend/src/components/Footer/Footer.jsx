import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logofooter} alt="" />
          <p>At SKJU, we are committed to crafting timeless pieces that celebrate life's special moments. With a focus on quality, craftsmanship, and sustainability, our collections are designed to bring elegance and beauty to your everyday life.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Privacy policy</li>
          </ul>

        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 9814886464</li>
            <li>aasutoshsony@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @skju.com.np - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer

