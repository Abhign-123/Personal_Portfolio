import React from 'react'
import './about.css'
import pic from './assets/images/IMG_20241129_232721.jpg'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import resume from './assets/ABHI_RESUME.pdf'

const  variants1 = (delay) => ({
  hidden: { x : -100 , opacity: 0 },
  visible: { x:0 ,opacity: 1,
  transition: { duration: 0.5  ,delay: delay}}
})

const gotoContact = () => {
  const element = document.getElementById('contact');
  element.scrollIntoView({ behavior: 'smooth'});
}
const Aboutme = () => {
  return (
    <div className='about' id='about'>
        
        <div className='about-content'>
        <motion.h3 initial ="hidden" animate="visible" variants={variants1(0)}>Hello I'm</motion.h3>
        <motion.h1  initial ="hidden" animate="visible" variants={variants1(0.5)}>Abhign Gattu</motion.h1>
          <Typewriter 
          options={{
            strings: ['Frontend Developer', 'React Developer', 'Adaptable Fresher'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'typewriter-text',
            cursorClassName: 'typewriter-cursor',
          }}
        />
        
        <motion.p  initial ="hidden" animate="visible" variants={variants1(1)}> 
          Highly motivated and adaptable fresher with a strong foundation in software development, including front-end technologies, networking concepts, and Windows and Linux operating systems. Eager to contribute to a dynamic development team and ready to learn and switch technologies according to the company’s requirements to deliver high-quality
            solutions.</motion.p>
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration : 0.5}} >
          <a href={resume} download="Abhign_Resume">Download Resume</a></motion.button>
        <button onClick={gotoContact}>
          Connect with Me</button>
        
        
      </div>

        <div className='about-image'>
            <motion.img initial={{x : 100 , opacity :0}} animate={{x : 0 , opacity :1}}transition={{ duration :1, delay: 1}}
            src={pic} alt='Abhign Gattu' />
        </div>
        
    </div>
  )
}

export default Aboutme
