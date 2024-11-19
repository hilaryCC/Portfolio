import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/blacklogo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

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
        <li><button className='btn'>
          <Link to='hero' smooth={true} offset={0} duration={500}>
          Home
          </Link>
        </button></li>
        <li><button className='btn'>
          <Link to='about' smooth={true} offset={-260} duration={500}>
            About
          </Link>  
        </button></li>
        <li><button className='btn'>
          <Link to='experience' smooth={true} offset={0} duration={500}>
            Experience
          </Link>  
        </button></li>
        <li><button className='btn'>Projects</button></li>
      </ul>
      <span className="list-icon" onClick={toggleMenu}><i className="bi bi-list"></i></span>
    </nav>
  )
}
