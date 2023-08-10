import React from 'react';
import project1 from '../images/project1.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Easy Reach - Online Contact Book',
      description: 'Developed a user-friendly contact book website using React, MongoDB, and Node.js/Express. Implemented robust login and signup functionality to ensure secure access for users. Incorporated CRUD operations to enable efficient management of contacts, allowing users to add, edit, and delete contact information.',
      link: 'https://frontend-my-contacts.vercel.app/',
    },
    // Add more projects here
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project1} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project1} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project1} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
