import React from 'react';

const Features = () => {
  const containerStyle = {
    backgroundColor: '#ffffff',
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
    backgroundColor: '#2563eb',
    margin: '0 auto 50px auto',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '30px',
    flex: '1 1 280px',
    maxWidth: '320px',
    textAlign: 'center',
  };

  const iconContainerStyle = {
    backgroundColor: '#e0edff',
    color: '#2563eb',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    fontSize: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px auto',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Features</h2>
      <div style={underlineStyle}></div>

      <div style={cardsContainerStyle}>
        <div style={cardStyle}>
          <div style={iconContainerStyle}>🤖</div>
          <div style={titleStyle}>Advanced Robotics Labs</div>
          <div style={textStyle}>
            State-of-the-art facilities equipped with the latest robotics hardware and software
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>👥</div>
          <div style={titleStyle}>Industry Collaboration</div>
          <div style={textStyle}>
            Strong partnerships with leading technology companies and research institutions
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>📖</div>
          <div style={titleStyle}>Research Excellence</div>
          <div style={textStyle}>
            Cutting-edge research in AI, machine learning, and autonomous systems
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>🏆</div>
          <div style={titleStyle}>Innovation Space</div>
          <div style={textStyle}>
            Dedicated areas for prototyping, testing, and developing new robotics solutions
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>📅</div>
          <div style={titleStyle}>Regular Workshops</div>
          <div style={textStyle}>
            Hands-on training sessions and workshops conducted by industry experts
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>↗️</div>
          <div style={titleStyle}>Industry Internships</div>
          <div style={textStyle}>
            Direct placement opportunities with our partner companies and organizations
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
