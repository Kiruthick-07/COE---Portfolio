import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Landingpage from './Components/Landingpage.jsx';
import About from './Components/About.jsx';
import VisionMission from './Components/VisionMission.jsx';
import Features from './Components/Features.jsx';
import Courses from './Components/Courses.jsx';
import Imagegallery from './Components/Imagegallery.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <div id="home" style={{ paddingTop: '80px' }}>
        <Landingpage />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <VisionMission />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="gallery">
        <Imagegallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
