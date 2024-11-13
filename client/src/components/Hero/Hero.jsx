import React, { useState } from 'react'
import './hero.css'
import arrow from '../../assets/arrow.png'
import whitearrow from '../../assets/whitearrow.png'

const Hero = () => {
    const [iconSrc, setIconSrc] = useState(arrow);
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h2>Hi, I'm Hilary Castro. </h2>
            <h1>Welcome to my website portfolio</h1>
            <p>
                I'm a Computer Engineering graduate with college experience in game, web, console and desktop app 
                development and static/dinamic testing; profesional experience as a Cloud Engineer working with 
                GCP and end-to-end testing with playwright
            </p>
            <button 
                className='btn'
                onMouseEnter={() => setIconSrc(whitearrow)}
                onMouseLeave={() => setIconSrc(arrow)}
                >
                    Know more
                <img src={iconSrc} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Hero