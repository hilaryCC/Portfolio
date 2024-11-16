import React from 'react'
import './about.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function lightenColor(hex, percent) {
  let num = parseInt(hex.slice(1), 16);
  let r = (num >> 16) + Math.round((255 - (num >> 16)) * (percent / 100));
  let g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * (percent / 100));
  let b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * (percent / 100));

  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

const About = () => {
  const systems = ["Windows", "MacOS", "Linux"];
  const tools = ["VS Code", "Github", "Eclipse", "Atom", "Confluence", "Jira"]
  const languages = ["Python", "Java", "C", "C++", "Javascript", "Typescript", "HTML", "CSS"]
  const cloudsFram = ["GCP", "AWS", "React", "Angular", "Node(Vite)"]
  const colors = [
    "#0073e6", "#00b3b3", "#004c99", "#00aaff",
    "#33cc33", "#00994c", "#7ed957", "#808080",
    "#d3d3d3", "#404040"
  ];
  const borders = colors.map(color => lightenColor(color, 50));
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
          <div className="top">
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
          <div className="bottom">
            <h3>SKILLS<i className="bi bi-code"></i></h3>
            <div className="border">
              <div className="card">
                <h2>Systems</h2>
                <div className='skill-list'>
                  {systems.map((system, index) => (
                    <li key={index}
                      style={{ backgroundColor: colors[index % colors.length], borderColor: borders[index % borders.length]}}>
                        {system}
                    </li>
                  ))}
                </div>

                <h2>Tools</h2>
                <div className='skill-list'>
                  {tools.map((tool, index) => (
                    <li key={index}
                      style={{ backgroundColor: colors[index % colors.length], borderColor: borders[index % borders.length]}}>
                        {tool}
                    </li>
                  ))}
                </div>

                <h2>Languages</h2>
                <div className='skill-list'>
                  {languages.map((language, index) => (
                    <li key={index}
                      style={{ backgroundColor: colors[index % colors.length], borderColor: borders[index % borders.length]}}>
                        {language}
                    </li>
                  ))}
                </div>

                <h2>Cloud and Frameworks</h2>
                <div className='skill-list'>
                  {cloudsFram.map((cloud, index) => (
                    <li key={index}
                      style={{ backgroundColor: colors[index % colors.length], borderColor: borders[index % borders.length]}}>
                        {cloud}
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