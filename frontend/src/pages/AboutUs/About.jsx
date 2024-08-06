import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-left">
          <img src={assets.aboutpic} alt="Model Female" />
          <img src={assets.aboutpic2} alt="Model Female" />
          <img src={assets.aboutpic3} alt="Model Female" />
        </div>
   
        <div className="about-right">
          <h2>About Us</h2>
          <hr />
          <div className="text">
            <p>
              Since 2069 B.S, Shree Krishna Jewellery Udhog has been enhancing lives with innovative products and creative solutions to
              business challenges. Our jewelry store is dedicated to exquisite craftsmanship and personalized
              service, offering everything from expert repairs to bespoke designs that exceed your expectations.
              Our curated collection captivates with simplicity, quality, and artistry, with each piece
              representing a commitment to unmatched craftsmanship and dedication. Our knowledgeable staff
              provides personalized advice, ensuring you find the perfect piece tailored to your unique needs.
              With an ever-evolving collection and exceptional packaging, we offer the ideal gift to delight your
              loved ones, enriching your jewelry experience with excellence and memorable moments.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>

      {/* <footer>
        Copyright 2024 @skju.com.np - All Right Reserved.
      </footer> */}
    </div>
  );
};

export default About;



// import React from 'react'
// import './About.css'

// const About = () => {
//   return (
//     <div>
//       <h2>About USSSSSSSSSssssssss!</h2>
//     </div>
//   )
// }

// export default About


