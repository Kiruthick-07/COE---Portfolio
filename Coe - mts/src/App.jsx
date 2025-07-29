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

function App() {
 

  return (
    <>
    <div className='body'>
      <div>
        <Navbar />
      </div>
      <div>
        <Landingpage />
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
    </div>

    </>
  )
}

export default App
