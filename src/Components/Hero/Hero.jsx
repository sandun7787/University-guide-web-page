import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className='hero-text'>
        <h1>  We Ensure better educations for the better world</h1>
        <p>A circulation or lending department is one of the key departments of a library. The main public service point is the circulation desk or loans desk, usually found near the main entrance of a library. </p>
        <button className='btn'>Explore More<img src={dark_arrow}></img></button>

      </div>
      
    </div>
  )
}

export default Hero

