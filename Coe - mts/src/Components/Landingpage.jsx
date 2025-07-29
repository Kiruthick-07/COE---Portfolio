import React from 'react';
import Lottie from 'lottie-react';
import roboticArmAnimation from './robot.json';

const HeroSection = () => {
  return (
    <div style={styles.hero}>
      {/* Left Text Section */}
      <div style={styles.left}>
        <h1 style={styles.heading}>
          Center of 
          <span style={styles.gradientText}> Excellence</span>
        </h1>
        <h2 style={styles.subheading}>on Robotics and Automation</h2>
        <p style={styles.description}>
          "Empowering the next generation of robotics innovators through cutting-edge research,
          world-class education, and transformative industry collaboration."
        </p>
        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Explore Programs</button>
          <button style={styles.secondaryBtn}>▶ Watch Demo</button>
        </div>

        <div style={styles.stats}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>500+</span>
            <p style={styles.statLabel}>Students Trained</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>01+</span>
            <p style={styles.statLabel}>Industry Partners</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>20+</span>
            <p style={styles.statLabel}>Paper Publications</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>03+</span>
            <p style={styles.statLabel}>Funded Projects</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div style={styles.right}>
        <div style={styles.imgGrid}>
        <div style={styles.lottieWrapper}>
          <Lottie animationData={roboticArmAnimation} loop={true} style={styles.lottieStyle} />
        </div>
        
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px 50px',
    background: 'linear-gradient(to right, #e0f2fe, #ede9fe)',

    color: '#111827',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1 1 50%',
    paddingRight: '30px',
  },
  right: {
    flex: '1 1 40%',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '10px',
    color: '#1f2937',
  },
  gradientText: {
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheading: {
    fontSize: '24px',
    color: '#374151',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    color: '#4b5563',
    marginBottom: '30px',
    maxWidth: '550px',
  },
  buttons: {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
  },
  primaryBtn: {
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)',
  },
  secondaryBtn: {
    background: 'transparent',
    color: '#3b82f6',
    border: '2px solid #3b82f6',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  stats: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
  },
  statItem: {
    minWidth: '120px',
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
  },
  imgGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  imgCard: {
    width: '100%',
    height: '180px',
    borderRadius: '15px',
    objectFit: 'cover',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
  },
  placeholderCard: {
    width: '100%',
    height: '180px',
    borderRadius: '15px',
    backgroundColor: '#e5e7eb',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
  },
  lottieStyle: {
    width: '500px',
    height: '500px',
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'block',
    margin: '0 auto',
  },
  lottieWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default HeroSection;
