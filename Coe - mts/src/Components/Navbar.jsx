import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    background: 'linear-gradient(to right, #e0f2fe,rgb(199, 235, 252))',
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
    height: "56px",
    margin: "10px 0",
  };
  const linkStyle = {
    textDecoration: 'none',
    display:"flex",
    color:"#333",
    fontWeight: "500",
    fontSize: "18px",
  };
  const ullist = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: "flex",
    gap:"60px",
    marginLeft:"10px",
    
  };

  return (
    <div style={navbar} className="navbar-container">
      <img style={keclogo} src="/kec-logo-removebg-preview.png" alt="KEC Logo" />
      <div>
        <ul
          style={ullist}
          className={`ul${menuOpen ? ' show' : ''}`}
        >
          <li><a href="#home" style={linkStyle} className='linkstyle'>Home</a></li>
          <li><a href="#about" style={linkStyle} className='linkstyle' >About</a></li>
          <li><a href="#features" style={linkStyle} className='linkstyle'>Features</a></li>
          <li><a href="#courses" style={linkStyle} className='linkstyle'>Courses</a></li>
          <li><a href="#events" style={linkStyle} className='linkstyle'>Events</a></li>
          <li><a href="#gallery" style={linkStyle} className='linkstyle'>Gallery</a></li>
          <li><a href="#contact" style={linkStyle} className='linkstyle'>Contact</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>
    </div>
  );
};

export default Navbar;