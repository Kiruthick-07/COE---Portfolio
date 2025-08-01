import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <img
          src="/kec-logo-removebg-preview.png"
          alt="KEC Logo"
          className="navbar-logo"
        />

        {/* Desktop Navigation */}
        <nav className="navbar-links-desktop">
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('features')}>Features</a>
          <a onClick={() => scrollToSection('courses')}>Courses</a>
          <a onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

        {/* Mobile Toggle Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-links-mobile ${menuOpen ? 'open' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('features')}>Features</a>
        <a onClick={() => scrollToSection('courses')}>Courses</a>
        <a onClick={() => scrollToSection('gallery')}>Gallery</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
