import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Project.css';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio website showcasing my skills and projects, built using React.',
            image: '/images/portfolio.png',
            link: 'https://github.com/arshdeeps19/portfolio',
            tags: ['React', 'JavaScript', 'CSS']
        },
        {
            id: 2,
            title: 'Shopping Cart Application',
            description: 'A full-stack shopping cart application using Spring Boot for backend and Angular for frontend.',
            image: '/images/shopping-cart.png',
            link: 'https://github.com/arshdeeps19/shopping-cart',
            tags: ['Angular', 'Spring Boot', 'MySQL']
        },
       
    ];

    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <p>Here are some of my recent projects...</p>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" data-aos="fade-up" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag, index) => (
                                <span className="tag" key={index}>{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
