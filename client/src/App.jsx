import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/about'
import Cursor from './components/cursor/Cursor.jsx'

const App = () => {
  return (
    <div>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <About/>
      
    </div>
  )
}

export default App
