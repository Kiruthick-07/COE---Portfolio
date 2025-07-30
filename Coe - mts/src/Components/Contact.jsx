import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "coe.robotics@kec.edu.np",
      link: "mailto:coe.robotics@kec.edu.np"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "04294226813",
      link: "tel:04294226813"
    },
    {
      icon: "📍",
      title: "Address",
      details: "Mechatronics Department , Kongu Engineering College",
      link: "https://maps.google.com/?q=Dhapakhel,Lalitpur,Nepal"
    },
    {
      icon: "🌐",
      title: "Website",
      details: "www.kec.edu.np",
      link: "https://www.kec.edu.np"
    }
  ];
  const underlineStyle = {
    width: '120px',
    height: '4px',
    backgroundColor: '#facc15',
    margin: '0 auto 50px auto',
  };

  return (
    <div className="contact-container" id="contact">
      {/* Contact Us Heading on Top */}
      <div className="contact-top-header">
        <h2 style={{marginBottom:'0px'}}>Contact Us</h2>
        <div style={underlineStyle}></div>
        <p>Reach out to us for any inquiries about our robotics and automation programs</p>
      </div>
      <div className="contact-content">
        {/* Left Side - Image */}
        <div className="contact-image-section">
          <div className="image-container">
            <img 
              src="/25yrs-mts.png" 
              alt="Contact Us" 
              className="contact-image"
            />
           
          </div>
        </div>

        {/* Right Side - Contact Information */}
        <div className="contact-info-section">
          {/* Header removed from here */}
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <span>{info.icon}</span>
                </div>
                <div className="contact-text">
                  <h4>{info.title}</h4>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.details}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <button className="cta-button">
              Send us a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;