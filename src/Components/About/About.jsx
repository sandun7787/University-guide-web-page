import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play-icon' />

        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>The University of Moratuwa (UoM) is one of Sri Lanka's</h2>
            <p>The University of Moratuwa (UoM) is one of Sri Lanka's leading technological universities, renowned for its focus on engineering, technology, and design. Situated in the suburbs of Colombo, UoM offers undergraduate and postgraduate programs across a variety of fields, including engineering, architecture, and information technology.

The university prides itself on producing highly skilled graduates who are well-prepared for the demands of the global job market. It fosters innovation, research, and industry collaboration, with a strong emphasis on entrepreneurship and applied learning. UoM is known for its state-of-the-art facilities, dedicated faculty, and its contribution to Sri Lanka's development through research and technological advancements.</p>
        </div>
    </div>
  )
}

export default About
