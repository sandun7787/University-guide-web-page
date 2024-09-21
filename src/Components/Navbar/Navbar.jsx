import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
   <nav>
    <img src={logo} alt=""></img>
    <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
    </ul>
   </nav>
  )
}
