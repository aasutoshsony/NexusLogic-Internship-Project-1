

import React from 'react';
import './Contact.css';
import { assets } from '../../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="contact-left"
        >
          <div className="contact-left-title">
            <h2>Reach out</h2>  
            <hr />
          </div>
          <input type="hidden" name="access_key" value="e245f2ce-2d05-4f69-8c5a-708692960750" />
          <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
          <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
          <button type="submit">
            Submit <img src={assets.arrow} alt="Arrow Icon" />
          </button> 
        </form>

        <div className="contact-right">
          <img src={assets.cont2} alt="Contact Image" />
        </div>
      </div>

     
    </div>
  );
};

export default Contact;


// import React from 'react'
// import './Contact.css'


// const Contact = () => {
//   return (
//     <div className='contact-page-info'>
//       <h2>This is CONTACT Page</h2>
//       <h2>This is CONTACT Page</h2>
//       <h2>This is CONTACT Page</h2>
     
            
//     </div>

//   )
// }
// export default Contact