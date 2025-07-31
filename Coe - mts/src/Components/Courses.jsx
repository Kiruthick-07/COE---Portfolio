import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const Courses = () => {
  const coursecomp = {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9fbfc',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: '10px',
  };

  const underlineStyle = {
    width: '120px',
    height: '4px',
    backgroundColor: '#facc15',
    margin: '0 auto 50px auto',
  };

  const coursecontainer1 = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  };

  const card = {
    backgroundColor: '#ffffff',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px',
    borderRadius: '12px',
    padding: '25px',
    width: '600px',
    boxSizing: 'border-box',
  };

  const badgeStyle = (bgColor) => ({
    backgroundColor: bgColor,
    borderRadius: '20px',
    padding: '5px 12px',
    color: '#1f2937',
    fontWeight: '600',
    fontSize: '14px',
    display: 'inline-block',
    marginBottom: '15px',
  });

  const titlestyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
    color: '#111827',
  };

  const subtextstyle = {
    color: '#374151',
    fontSize: '15px',
    lineHeight: '1.5',
    textAlign: 'justify',
  };

  return (
    <div style={coursecomp}>
      <h2 style={headingStyle}>Courses Offered</h2>
      <div style={underlineStyle}></div>
      <div style={coursecontainer1}>
        <div style={card}>
          <p style={badgeStyle('#bbf7d0')}>Certification Course</p>
          <div style={titlestyle}>FANUC certification course on Robot Operations and Programming</div>
          <div style={subtextstyle}>
            Provides hands-on training in industrial robot control, programming and troubleshooting. It equips learners with essential skills needed for real-world automation & manufacturing applications.
          </div>
        </div>

        <div style={card}>
          <p style={badgeStyle('#bbf7d0')}>Certification Course</p>
          <div style={titlestyle}>FANUC CNC Simulator</div>
          <div style={subtextstyle}>
            Offers practical training on CNC programming and machine operations using the FANUC simulator. It helps learners develop essential skills in G-Code programming, tool path simulation, and CNC machining processes.
          </div>
        </div>

        <div style={card}>
          <p style={badgeStyle('#a5f3fc')}>One-Credit Course</p>
          <div style={titlestyle}>Robot Operating System</div>
          <div style={subtextstyle}>
            Provides foundational knowledge in robotics middleware, covering ROS architecture, simulation and control. It enables learners to build, program and simulate intelligent robotics systems using ROS tools.
          </div>
        </div>

        <div style={card}>
          <p style={badgeStyle('#a5f3fc')}>One-Credit Course</p>
          <div style={titlestyle}>Robot Operations and Programming</div>
          <div style={subtextstyle}>
            Provides hands-on training in industrial robot control, programming and troubleshooting. It equips learners with essential skills needed for real-world automation & manufacturing applications.
          </div>
        </div>
        <div style={card}>
          <p style={badgeStyle('#a5f3fc')}>One-Credit Course</p>
          <div style={titlestyle}>Programming and operations for
          Humanoid Robot</div>
          <div style={subtextstyle}>
          Offers practical exposure to the programming, control, and operation of humanoid robots. Learners will explore motion planning, sensor integration, and behavior scripting to develop intelligent, human-like robotic systems for real-world applications.
          </div>
        </div>
        <div style={card}>
          <p style={badgeStyle('#c4b5fd')}>Non-Formal Course/Workshops</p>
          <div style={titlestyle}>Robot Programming</div>
          <div style={subtextstyle}>
          Focuses on the fundamentals of industrial robot programming, covering coordinate systems, path planning, and control logic. Learners gain hands-on experience in writing, testing, and debugging code for robotic arms in automation environments.
          </div>
        </div>
        <div style={card}>
          <p style={badgeStyle('#c4b5fd')}>Non-Formal Course/Workshops</p>
          <div style={titlestyle}>Autonomous Bot Building</div>
          <div style={subtextstyle}>
          Introduces the design and development of autonomous mobile robots. Covers sensor integration, obstacle detection, path planning, and embedded programming to build bots capable of real-time decision-making and self-navigation.
          </div>
        </div>
        <div style={card}>
          <p style={badgeStyle('#c4b5fd')}>Non-Formal Course/Workshops</p>
          <div style={titlestyle}>Programming of serial manipulator</div>
          <div style={subtextstyle}>
          Covers the programming concepts and kinematic control of serial manipulators used in industrial automation. Learners will explore joint and Cartesian space programming, motion control, and trajectory planning for multi-joint robotic arms.
          </div>
        </div>
        <div style={card}>
          <p style={badgeStyle('#c4b5fd')}>Non-Formal Course/Workshops</p>
          <div style={titlestyle}>Humanoid Robot programming</div>
          <div style={subtextstyle}>
          Provides practical knowledge in controlling and programming humanoid robots. Focuses on motion coordination, sensor-based interactions, and behavior scripting to simulate human-like actions and decision-making in real-world environments.
          </div>
        </div>
        <div style={card}>
          <p style={badgeStyle('#c4b5fd')}>Non-Formal Course/Workshops</p>
          <div style={titlestyle}>Programming and applications of
          Drone Technology</div>
          <div style={subtextstyle}>
          Introduces the fundamentals of drone technology with a focus on flight programming, autonomous navigation, and aerial data acquisition. Learners will explore real-world applications in surveillance, agriculture, mapping, and disaster management.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
