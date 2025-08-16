import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar=()=>{
    return(
        <div className='navbar'>
        <img src={logo} className='logo' alt="Logo" />
    
        <div className="nav-menu">
            <div className="Home"><a href="#home">Home</a></div>
           <div className="About_me"><a href="#about">About</a></div>
           <div className="Skills"><a href="#skills">Skills</a></div>
           <div className="Projects"><a href="#projects">Projects</a></div>
           <div className="Contact"><a href="#contact">Contact</a></div>
        </div>
        <div className="nav-connect"><a href="#contact">Connect With Me</a></div>
        </div>
    )
}

export default Navbar