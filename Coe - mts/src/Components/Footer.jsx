import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Courses', href: '#courses' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: 'https://facebook.com' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { name: 'Instagram', icon: '📷', href: 'https://instagram.com' },
    { name: 'YouTube', icon: '📺', href: 'https://youtube.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Sections */}
        <div className="footer-main">
          {/* Logo and Description Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/kec-logo-removebg-preview.png" alt="KEC Logo" />
              <div className="logo-text">
                <h3>Center of Excellence</h3>
                <p>Robotics & Automation</p>
              </div>
            </div>
            <p className="footer-description">
              Empowering the next generation of robotics innovators through cutting-edge research, 
              world-class education, and transformative industry collaboration.
            </p>
          </div>


          {/* Social Media Section */}
          <div className="footer-section">
          <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <center>
            <p>&copy; {currentYear} Center of Excellence - Robotics and Automation. All rights reserved.</p>
            </center>
            <div className="footer-bottom-links">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
