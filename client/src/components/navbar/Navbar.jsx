import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/blacklogo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const toggleMenu = () => {
    sideMenu ? setSideMenu(false) : setSideMenu(true);
  }
  return (
    <nav className='container'>
      <div className='navbar-left'>
        <img src={logo} alt='' className='logo'/>
        <p className='navbar-title'>Hilary Castro</p>
      </div>  
      <ul className={sideMenu?'':'side-menu'}>
        <li><button className='btn'>Home</button></li>
        <li><button className='btn'>About</button></li>
        <li><button className='btn'>Experience</button></li>
        <li><button className='btn'>Projects</button></li>
      </ul>
      <span className="list-icon" onClick={toggleMenu}><i className="bi bi-list"></i></span>
    </nav>
  )
}
