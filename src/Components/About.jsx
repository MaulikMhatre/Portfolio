import React from 'react'
import './About.css'
import about_logo from '../assets/About_image.jpeg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_logo} alt="About_Image" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                      Aspiring frontend developer with a passion for clean design and smooth user experiences.
    I work with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and I’m exploring <strong>React</strong> and <strong>Tailwind CSS</strong>.
    Always learning. Always building.   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 