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
    <>
    <div className='body'>
      <div>
        <Navbar />
      </div>
      <div>
        <div style={{ marginTop: '70px' }}>
          <Landingpage />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <VisionMission />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Courses />
      </div>
      <div>
        <Imagegallery />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>

    </>
  )
}

export default App
