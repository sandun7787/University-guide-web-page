import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}> {/* Corrected string interpolation */}
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  );
}
