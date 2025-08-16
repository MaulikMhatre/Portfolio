import React from 'react'
import './Hero.css'
import logo from '../assets/face_logo.png'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={logo} alt="Face-Photo" />
            <h1><span>I'm Maulik Mhatre,</span></h1>
            <p>I'm a frontend developer who loves creating clean, responsive, and user-friendly web interfaces. I enjoy turning ideas into interactive digital experiences using modern web technologies. </p>
        </div>
    )
}
export default Hero