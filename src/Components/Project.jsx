import React from'react'
import './Project.css'
import project1 from '../assets/project_1.png'; 
import project2 from '../assets/project_2.png';
const Project=()=>{

         const projects = [
    {
      title: 'The Botaniques : E-Commerce Nursery Website',
      image: project1,
      description:
        'The Botaniques is a frontend e-commerce website for a plant nursery, designed to offer users an interactive and responsive shopping experience. Built using React, the platform allows users to browse plant listings and manage their shopping cart efficiently. Key features include adding plants to the cart, updating quantities, and removing items — providing a solid foundation for a full e-commerce experience.',
      tech: ['React', 'CSS', 'JavaScript'],
      liveLink: 'https://maulikmhatre.github.io/e-plantShopping/',
      codeLink: 'https://github.com/MaulikMhatre/e-plantShopping.git',
    },
    {
      title: 'Wander Glimpse :Travel Recommandation Website',
      image: project2,
      description:
        'Wander Glimpse is a responsive travel recommendation website built with vanilla JavaScript, HTML, and CSS. It provides curated travel suggestions across categories like cities, temples, and beaches using a custom dataset. Each destination is displayed with an image and a brief description, allowing users to explore different places visually and interactively.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      liveLink: 'https://maulikmhatre.github.io/TravelRecommendation/',
      codeLink: 'https://github.com/MaulikMhatre/TravelRecommendation.git',
    },
   
  ];


    return(
         <section id='projects' className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project