import React from 'react';
import './navbar.css';
import logo from '../../assets/a..jpg';

 
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>

    <div className="desktop-menu">
    </div>
    <button className="contact-btn">Contact

    </button>
    </nav>
  )
}

export default Navbar
