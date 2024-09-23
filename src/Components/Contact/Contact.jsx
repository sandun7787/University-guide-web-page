import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1d68034a-7720-4aba-8b30-65d9cb3f2b78");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>
          The student experience at the University of Moratuwa (UoM), especially for engineering and technology students, is known to be academically challenging but highly rewarding.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Mail Icon" /> Contact@SandunStck.dev</li>
          <li><img src={phone_icon} alt="Phone Icon" /> 0754794145</li>
          <li><img src={location_icon} alt="Location Icon" /> 77 Massachusetts Ave, Cambridge, MA 82842, United States</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your Name' required />

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />

          <label>Write your message here</label>
          <textarea name="message" rows='6' placeholder='Enter your Message' required></textarea>

          <button type='submit' className='btn dark-btn'>
            Submit Now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
