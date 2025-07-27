import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Landingpage from './Components/Landingpage.jsx';

function App() {
 

  return (
    <>
      <div className='body'>
        <Navbar />
      </div>
      <div>
        <Landingpage />
      </div>

    </>
  )
}

export default App
