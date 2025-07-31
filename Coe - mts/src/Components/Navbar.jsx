import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    background: 'linear-gradient(to right, #e0f2fe, rgb(199, 235, 252))',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    position: 'fixed',
    width: '100%',
    boxSizing: 'border-box',
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const keclogo = {
    height: '56px',
    margin: '10px 0',
  };

  const linkStyle = {
    textDecoration: 'none',
    display: 'flex',
    color: '#333',
    fontWeight: '500',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const ullist = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '60px',
    marginLeft: '10px',
  };

  return (
    <div style={navbar} className="navbar-container">
      <img style={keclogo} src="/kec-logo-removebg-preview.png" alt="KEC Logo" />
      <div className='ulcontainer'>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')} style={linkStyle} className='linkstyle'>Home</a></li>
          <li><a onClick={() => scrollToSection('about')} style={linkStyle} className='linkstyle'>About</a></li>
          <li><a onClick={() => scrollToSection('features')} style={linkStyle} className='linkstyle'>Features</a></li>
          <li><a onClick={() => scrollToSection('courses')} style={linkStyle} className='linkstyle'>Courses</a></li>
          <li><a onClick={() => scrollToSection('gallery')} style={linkStyle} className='linkstyle'>Gallery</a></li>
          <li><a onClick={() => scrollToSection('contact')} style={linkStyle} className='linkstyle'>Contact</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars}  onClick={() => setMenuOpen(!menuOpen)} />
      </div>
    </div>
  );
};

export default Navbar;
