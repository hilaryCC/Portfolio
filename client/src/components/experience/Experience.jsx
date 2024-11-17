import React from 'react'
import './experience.css'
import expGif from '../../assets/exp.gif'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Experience = () => {
  return (
    <div className='experience'>
        <div className='img-container'>
            <img src={expGif} alt="Experience GIF" />
        </div>
        <div className="timeline">
          <h2 className='title'> EXPERIENCE&nbsp;<i class="bi bi-graph-up-arrow"></i></h2>
          <div className="timeline-row">

              <div className="timeline-box">

                <div className="timeline-content">
                  <div className="content">
                    <div className="year"><i class="bi bi-calendar3"></i>&nbsp;Oct to Dec 2019 | <b>Bridgestone</b></div>
                    <h3>Maintenance Internship</h3>
                    <p>I have experience in the technical maintenance and installation of electrical equipment, 
                      where I specialized in reading and interpreting equipment manuals and work orders to perform 
                      necessary maintenance and services. I assisted in the installation of new machinery and 
                      equipment, utilizing hand tools, power tools, and precision measuring instruments for repair 
                      work. Additionally, I conducted testing of electrical components and circuits to ensure 
                      safety and compliance with standards</p>
                  </div>
                </div>

                <div className="timeline-content">
                  <div className="content">
                    <div className="year"><i class="bi bi-calendar3"></i>&nbsp;2023-2024 | <b>Tecnológico de Costa Rica</b></div>
                    <h3>Professor's Assistant, Mentoring and Tutoring</h3>
                    <p>As a Professor's Assistant, I mentored and tutored students in courses such as Computing 
                      Elements, Introduction to Programming, Compilers and Interpreters, and Data Structures. 
                      This allowed me to deepen my understanding of key computer science concepts 
                      while developing strong communication and problem-solving skills. I assisted students in 
                      grasping complex topics, reinforcing my ability to explain technical concepts 
                      in a clear and accessible manner. This role also honed my organizational and leadership 
                      skills as I coordinated study sessions and helped students overcome academic challenges.
                    </p>
                  </div>
                </div>

                <div className="timeline-content">
                  <div className="content">
                    <div className="year"><i class="bi bi-calendar3"></i>&nbsp;Feb to Oct 2024 | <b>Hewlett Packard Enterprise</b></div>
                    <h3>Cloud Engineer Internship</h3>
                    <p>This role gave me experience in analyzing and developing solutions using Google Cloud services,
                       where I focused on evaluating service usage and implementing new dashboards for better 
                       monitoring and insights. Additionally, I worked with SCRUM methodologies to ensure efficient 
                       and collaborative project execution. I created 
                       and executed end-to-end tests using Playwright, ensuring robust, high-quality software delivery. 
                       This role helped me develop a strong understanding of cloud infrastructure, agile workflows, 
                       and automation, all while enhancing my ability to work within dynamic and cross-functional teams.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience