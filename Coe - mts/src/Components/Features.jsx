import React from 'react';
import './Features.css';

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
    gap: '80px',
    justifyContent: 'center',
    maxWidth: '1900px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
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
          <div style={iconContainerStyle}>📈</div>
          <div style={titleStyle}>Highlighting Features</div>
          <div style={textStyle}>
            <ul style={{textAlign:"justify"}}>
              <li>Well equipped facilities with more than 1
              crore of investment.</li>
              <li>Signed MoU with M/s. FANUC India Private
              limited, Bangalore</li>
              <li>Established FANUC training Academy</li>
              <li>Established e-Yantra Lab initiative with
              IIT, Bombay</li>
              <li>Placement support in the area of Robotics
              and Automation</li>
              <li>Well equipped research facilities</li>
              <li>Outcome of student project to paper
              Publication in the reputed journals.</li>
              <li>Offers consultancy, training courses in the
              field of Robotics.</li>
              <li>Associated with Robotics club of KEC.</li>
              <li>Associated with The Robotics Society (TRS)
              - KEC student Chapter.</li>
            </ul>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>🤖</div>
          <div style={titleStyle}>List Of Major Equipments</div>
          <div style={textStyle}>
            <ul style={{textAlign:'left'}}>
              <li>Aristo Robot (MTAB)</li>
              <li>LabVIEW Robotics sbRIO Starter Kit</li>
              <li>6 Axis Industrial Robot Arm (ABB IRB 1410)</li>
              <li>High Performance Real Time Camera</li>
              <li>Qbot-2 (Quanser)</li>
              <li>NAO V6 Robot</li>
              <li>Dobot Magician Educational Kit</li>
              <li>FANUC Robot ER-4iA</li>
              <li>FANUC CNC Simulator (Lathe and Mill)</li>
              <li>Robotic PRR type Manipulator</li>
            </ul>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={iconContainerStyle}>💻</div>
          <div style={titleStyle}>List Of Software Details</div>
          <div style={textStyle}>
           <ul style={{textAlign:'left'}}>
            <li>Robot Virtual Software (Denford)</li>
            <li>Robot Studio 5.15</li>
            <li>MATLAB Tool Boxes</li>
            <li>FANUC CNC system Package – NC guide</li>
            <li>FANUC CNC system Package – MT link</li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
