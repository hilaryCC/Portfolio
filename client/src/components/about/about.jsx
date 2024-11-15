import React from 'react'
import './about.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const About = () => {
  const systems = ["Windows", "MacOS", "Linux"];
  const colors = [
    "#f89d63", "#f59761", "#ef865e", "#ec805d",
    "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    "#9c155f", "#950f5f", "#830060", "#7c0060",
    "#680060", "#60005f", "#48005f", "#3d005e"
  ];
  return (
    <div className='about'>
        <div className="left">
          <div className="section">
            <h3>ABOUT<i className="bi bi-person-lines-fill"></i></h3>
            <p>
              I'm a 23 year old Computer Engineer woman with passion
              for learn and create. I enjoy to bring new ideas to life 
              through teamwork and asertive communication.
            </p>
            <p>
              Most of my projects where build during collegue, find 
              my re-uploaded repositories 
              <a href="https://github.com/hilaryCC" target='_blank'> here<i className="bi bi-github"></i></a>
              
            </p>
            <p>
              When I'm not coding or learning a technology I like to 
              spend my time on my hobbies:
            </p>
            <ul>
              <li><i className="bi bi-flower3"></i>Crochet</li>
              <li><i className="bi bi-camera-fill"></i>Photography</li>
              <li><i className="bi bi-music-note-list"></i>Music</li>
              <li><i className="bi bi-bricks"></i>Lego building</li>
              <li><i className="bi bi-cookie"></i>Cooking</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="section top">
            <h3>EDUCATION<i className="bi bi-pen-fill"></i></h3>
            <div className="border">
              <div className="card">
                <h2>Computer Engineering</h2>
                <p>
                  Instituto Tecnológico de Costa Rica
                </p>
                <ul>
                  <li><i className="bi bi-check2-circle"></i>Software Engineering</li>
                  <li><i className="bi bi-check2-circle"></i>Project Management</li>
                  <li><i className="bi bi-check2-circle"></i>Computer Science</li>
                </ul>
              </div>
            </div>
            <div className="border">
              <div className="card">
                <h2>Medium Technician in Electrical Engineering</h2>
                <p>
                  Jesús Ocaña Rojas Technical Highschool
                </p>
                <ul>
                  <li><i className="bi bi-check2-circle"></i>Industrial Electronics</li>
                  <li><i className="bi bi-check2-circle"></i>Electrical Desingning</li>
                  <li><i className="bi bi-check2-circle"></i>Machine Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section bottom">
            <h3>SKILLS<i className="bi bi-code"></i></h3>
            <div className="border">
              <div className="card">
                <h2>Systems</h2>
                <div className='skill-list'>
                  {systems.map((system, index) => (
                    <li key={index}
                      style={{ backgroundColor: colors[index % colors.length] }}>
                        {system}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About