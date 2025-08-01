import React from 'react';
import './About.css';

const About = () => {
  const aboutcontainer = {
    display: "flex",
    alignItems: "flex-start",
    gap: "30px",
    padding: "20px",
    flexWrap: "wrap"
  };

  const textdiv = {
    flex: "1",
    lineHeight: "1.6",
    textAlign: "justify",
    marginTop: "20px",
  };

  const imgdiv = {
    flexShrink: "0",
  };

  const image = {
    height: "500px",
    width: "450px",
    borderRadius: "07px",
  };

  const underlineStyle = {
    width: '80px',
    height: '4px',
    backgroundColor: '#2563eb',
    margin: '0 auto 10px auto',
  };

  return (
    <div>
      <center>
        <h1 style={{ fontWeight: "600", color: "black", margin: '30px', marginBottom: "0px" }}>About Us</h1>
        <div style={underlineStyle}></div>
      </center>

      <div style={aboutcontainer} className='aboutcontainer'>

        <div style={textdiv} className='sub-text'>
          <h2>Leading Innovation In Robotics & Automation</h2>
          <p style={{ fontSize: "18.7px", color: "#636363", marginRight: '10px', textAlign: "justify",marginTop: "30px" }}>
            Centre of Excellence in Robotics and Automation (CoE-R&A) is a cutting-edge state
            of art platform to learn, build, explore and realize Robot technologies. CoE-R&A holds
            FANUC ER-4iA Robot, FANUC CNC Simulator, ABB IRB 1410 Robot, Humanoid Robot: NAO 6th
            Gen., Dobot Magician Kit with Accessories, QBot 2e and various software tools to equip the
            users. 
          </p>
          <p style={{ marginTop: "10px", fontSize: "19px", color: "#636363",textAlign: "justify" }}>
            It enables the user to experience the Robotic and Automation world to meet the
            growing demands with trained engineers in the industrial automation. It also offers multifold
            benefits for promoting research, participation in national and international competitions,
            availing grants and tailor made as expected by users.
          </p>
        </div>

        <div style={imgdiv}>
          <img style={image} src='Novorobot.jpg' alt='Robot-img'></img>
        </div>

      </div>
    </div>
  );
};

export default About;
