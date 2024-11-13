import React from 'react'
import './navbar.css'
import logo from '../../assets/blacklogo.png';

export const Navbar = () => {
  return (
    <nav className='container'>
      <div className='navbar-left'>
        <img src={logo} alt='' className='logo'/>
        <p className='navbar-title'>Hilary Castro</p>
      </div>  
      <ul>
        <li><button className='btn'>Home</button></li>
        <li><button className='btn'>About</button></li>
        <li><button className='btn'>Experience</button></li>
        <li><button className='btn'>projects</button></li>
      </ul>
    </nav>
  )
}
