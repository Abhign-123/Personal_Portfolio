import React from 'react';
import './projects.css';
import projectdata from './projects.json';
import {motion} from 'framer-motion';

const Projects = () => {

  const variants3 = (duration) => ({
    initial: { opacity: 0 ,scale:0.9, transition: { duration: 0.25, ease: "easeOut" }},
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration, ease: "easeInOut" }
    }
  })

  return (
    <div className='projects' id='projects'>
      <motion.h1 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "linear"}}
        className='project-heading'
      >Projects</motion.h1>
      <div className="project-cards">
        {projectdata.map((data, key) => (
          <motion.div 
            initial="initial" variants={variants3(key*0.35)} whileInView="whileInView"
            className='project-info' key={key}>
            <img src={data.image} alt={data.title} className='demo-image' />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <div className="techstack">
              {data.technologies.map((tech, techKey) => (
                <span key={techKey} className="tech-badge">{tech}</span>
              ))}
            </div>
            <button className='live-link'>
              <a href={data.url}
              target="_blank"
              rel="noopener noreferrer">View Project</a></button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;