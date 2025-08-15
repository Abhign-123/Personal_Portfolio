import React from 'react';
import './experience.css';
import experiencedata from './experience.json';
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <div className='experienced' id='experience'>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear"}}
        className='exp-heading'>Experience</motion.h1>
      <div className='experience'>
        {experiencedata.map((data, key) => (
          <motion.div 
          
              initial={{
                opacity: 0,
                x: key % 2 === 0 ? 20 : -20
              }}
              whileInView={{
                opacity: 1,
                x: 0, 
              }}
              transition={{ duration: 0.5, ease: "linear"}}
              
              
          className='experience-row' key={key}>
            <div className='experience-year'>
              <h3 className='company-year'>{data.year}</h3>
            </div>
            <div className='company-info'>
              <h4>{data.role} - {data.company}</h4>
              <p>{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;