import React from 'react'
import './hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h2>Hi, I'm Hilary Castro</h2>
            <h1>Welcome to my website portfolio</h1>
            <p>
                I'm a Computer Engineering graduate with college experience in game, web, console and desktop app 
                development and static/dinamic testing; profesional experience as a Cloud Engineer working with 
                GCP and end-to-end testing with playwright
            </p>
            <button className='btn'>Know more<img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero