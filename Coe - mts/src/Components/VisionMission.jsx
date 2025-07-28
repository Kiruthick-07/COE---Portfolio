import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const containerStyle = {
    backgroundColor: '#f9fbfc',
    padding: '20px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: '10px',
  };

  const underlineStyle = {
    width: '80px',
    height: '4px',
    backgroundColor: '#facc15', 
    margin: '0 auto 50px auto',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '80px',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '30px',
    flex: '1 1 400px',
    maxWidth: '500px',
    gap:"50px",
  };

  const iconContainerStyle = (bgColor) => ({
    backgroundColor: bgColor,
    color: '#fff',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  });

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#374151',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Vision & Mission</h2>
      <div style={underlineStyle}></div>

      <div style={cardsContainerStyle}>
        {/* Vision */}
        <div style={cardStyle}>
          <div style={iconContainerStyle('#2563eb')}>
            🏆
          </div>
          <div style={titleStyle}>Our Vision</div>
          <div style={textStyle}>
          To be the best Centre of Excellence for
Robotics and Automation by providing stateof-
the-art Research & Development facilities
for the nation and beyond
          </div>
        </div>

        {/* Mission */}
        <div style={cardStyle}>
          <div style={iconContainerStyle('#facc15')}>
            🤖
          </div>
          <div style={titleStyle}>Our Mission</div>
          <div style={textStyle}>
          We are committed to providing value-based
academic programs, training activities,
research facilities and opportunities supported
by continuous industry-institute interaction
aimed at employability, entrepreneurship,
leadership, and research aptitude among
students to keep the Nation ahead in the
competitive knowledge-intensive world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
