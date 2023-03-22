import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Socials from './Components/Socials'

function App() {
  
  return (
    <div className="App h-screen text-4xl   bg-gradient-to-b from-black to-gray-800">
      <Navbar />
      <Home className=''/>
      <Socials/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
