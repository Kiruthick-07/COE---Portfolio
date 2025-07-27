import React from 'react';
import './Landingpage.css'

const HeroSection = () => {
  return (
    <div className="hero-section" style={styles.container}>
      {/* Left Text Section */}
      <div style={styles.textContainer}>
        <h1 style={styles.title}>
          Center of Excellence <br />
          <span style={styles.highlight}>on Robotics and Automation</span>
        </h1>
        <p style={styles.subtitle}>
        "Empowering the next generation of robotics innovators through research, education, and industry collaboration."
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn}>Learn More</button>
          <button style={styles.secondaryBtn}>Get in Touch</button>
        </div>
      </div>

      {/* Right Image Grid */}
      <div style={styles.imageContainer}>
        <img src="Coeimg.jpg" alt="robot1" style={styles.largeImage} />
        <div style={styles.bottomImages}>
          <img src="4.Coeimg2.jpg" alt="robot2" style={styles.smallImage} />
          <img src="Coeimg3.jpg" alt="robot3" style={styles.smallImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px',
    alignItems: 'center',
    
    flexWrap: 'wrap',
  },
  textContainer: {
    maxWidth: '45%',
    marginLeft:"40px",
  },
  title: {
    fontSize: '60px',
    fontWeight: 'bold',
    color: '#111',
    lineHeight: '0.8',
  },
  highlight: {
    color: '#1664f3',
    fontSize : "30px",
  },
  subtitle: {
    fontSize: '17px',
    color: '#555',
    marginTop: '20px',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
  },
  primaryBtn: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#1664f3',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  secondaryBtn: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#f3b700',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '50%',
    marginLeft:"80px",
  },
  largeImage: {
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    objectFit: 'cover',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  bottomImages: {
    display: 'flex',
    gap: '20px',
  },
  smallImage: {
    flex: 1,
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
};

export default HeroSection;
