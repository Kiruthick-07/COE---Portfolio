import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const navbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 30px', 
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    
  };
  const keclogo = {
    height: "80px",
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
    <div style={navbar}>
      <img style={keclogo} src="/kec-logo-removebg-preview.png" alt="KEC Logo" />
      <div>
        <ul style={ullist}>
          <li><a href="#home" style={linkStyle} className='linkstyle'>Home</a></li>
          <li><a href="#about" style={linkStyle} className='linkstyle' >About</a></li>
          <li><a href="#features" style={linkStyle} className='linkstyle'>Features</a></li>
          <li><a href="#courses" style={linkStyle} className='linkstyle'>Courses</a></li>
          <li><a href="#events" style={linkStyle} className='linkstyle'>Events</a></li>
          <li><a href="#gallery" style={linkStyle} className='linkstyle'>Gallery</a></li>
          <li><a href="#contact" style={linkStyle} className='linkstyle'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;