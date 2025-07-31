import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const containerStyle = {
    background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
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
    width: '300px',
    height: '4px',
    backgroundColor: '#facc15', 
    margin: '0 auto 50px auto',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    alignContent: "spacearound",
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '30px',
    flex: '1 1 300px',
    maxWidth: '350px',
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
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Vision , Mission & Objective</h2>
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
        {/* Objective */}
        <div style={cardStyle}>
          <div style={iconContainerStyle('#10b981')}>
            🎯
          </div>
          <div style={titleStyle}>Our Objective</div>
          <div style={textStyle}>
          To provide hands-on training in robotics
          and automation field.
         To facilitate workshops and seminars to
          augment knowledge and skills in the field.
         Foster partnerships with industry to
        address real-world challenges through
         robotics and automation.
         To conduct advanced research in robotics
         and automation technologies.
         To motivate and support the students
        community to participate in various
         International/National level technical
        competitions
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
