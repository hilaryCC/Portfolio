import React from 'react'
import './about.css'
import image1 from '../../assets/blacklogo.png'

const About = () => {
  return (
    <div className='about'>
        <div className="left">
          <div className="section">
            <h3>ABOUT</h3>
            <p>
              I'm a 23 year old Computer Engineer woman with passion
              for learn and create. I enjoy to bring new ideas to life 
              through teamwork and asertive communication.
            </p>
            <p>
              Most of my projects where build during collegue, find 
              my re-uploaded repositories here (insert github link)
            </p>
            <p>
              When I'm not coding or learning a technology I like to 
              spend my time on my hobbies:
            </p>
            <ul>
              <li>Photography</li>
              <li>Crochet</li>
              <li>Music</li>
              <li>Lego building</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="section top">
            <h3>EDUCATION</h3>
          </div>
          <div className="section bottom">
            <h3>SKILLS</h3>
          </div>
        </div>
    </div>
  )
}

export default About