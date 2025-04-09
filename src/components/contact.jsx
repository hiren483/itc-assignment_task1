import React from 'react'
import './components.css'
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id='contact_container'>

      <div id='form-container'>
      <form id="contact-form">
        <input type="text" placeholder="Your Name" name="name" required className='form-field' />
        <input type="email" placeholder="Your Email" name="email" required className='form-field'/>
        <textarea placeholder="Your Message" name="message" rows="4" required className='form-field'/>
        <button type="submit" className='form-field' id='submit-btn'>Send Message</button>
      </form>


      </div >

      <div id='contact-links'>

      <ul>
        <li><FontAwesomeIcon icon={faFacebook} size="1x" /><a href="https://www.facebook.com/tech.iitb/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><FontAwesomeIcon icon={faInstagram} size="1x" /> <a href="https://www.instagram.com/tech.iitb" target="_blank" rel="noopener noreferrer">instagram</a></li>
        <li><FontAwesomeIcon icon={faTwitter} size="1x" /><a href="https://x.com/tech_iitb" target="_blank" rel="noopener noreferrer">
      Twitter</a></li>
        <li>📞8128679781</li>
        <li>✉️gsectech@iitb.ac.in</li>
      </ul>
      </div>
    </div>
  )
}

export default Contact
