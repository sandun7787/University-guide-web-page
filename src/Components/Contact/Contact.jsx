import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a Mesage  <img src={msg_icon} alt="" /></h3>
                <p>
                The student experience at the University of Moratuwa (UoM), especially for engineering and technology students, is known to be academically challenging but highly rewarding. Here's an overview of what it might look like
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />
                        Contact@SandunStck.dev
                    </li>
                    <li><img src={phone_icon} alt="" />0754794145</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br/>MA 82842 Unite State</li>
                </ul>
                </div>
                <div className="contact-col">
                  <form>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' />
                    <required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' />
                    <required/>
                    <label>Write ypur message her</label>
                    <textarea name="message" rows='6' placeholder='Enter your Message' required></textarea>
                    <button type='submite' className='btn dark-btn'>Submite Now <img src={white_arrow} alt="" /></button>
                  </form>
                  <span>Sending</span>
                </div>
        </div>
      
    </div>
  )
}

export default Contact
