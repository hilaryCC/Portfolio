import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/about'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'> 
        <About/>
      </div>
      
    </div>
  )
}

export default App
