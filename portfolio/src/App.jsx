import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  
  return (
    <div className="App h-screen text-4xl   bg-gradient-to-b from-black to-gray-800">
      <Navbar />
      <Home className=''/>
    </div>
  )
}

export default App
