import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll for smooth scrolling
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // Added state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Toggle menu visibility
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}> {/* Corrected string interpolation */}
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}> {/* Conditional class for mobile menu */}
        {/* Correct Link usage for smooth scrolling */}
        <li><Link to="hero" smooth={true} offset={-50} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-240} duration={500}>Campus</Link></li>
        <li><Link to="test" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-150} duration={500} className="btn">Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} /> {/* Added toggle functionality */}
    </nav>
  );
}
