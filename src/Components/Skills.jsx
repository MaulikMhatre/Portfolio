import React from'react'
import './Skills.css'

import htmlLogo from '../assets/HTML5_logo.png';
import cssLogo from '../assets/css_logo.png';
import jsLogo from '../assets/javascript_logo.png';
import reactLogo from '../assets/React_logo.png';
import javaLogo from '../assets/java_logo.png';
import cLogo from '../assets/C_logo.png';

const Skills=()=>{
    const skills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Java', logo: javaLogo },
        { name: 'C', logo: cLogo },
      ];
    return(
        <div id='skills' className='skills-section'>
            <div className="skills-title">
                 <h1>My Skills</h1>
            </div>
              <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Skills


