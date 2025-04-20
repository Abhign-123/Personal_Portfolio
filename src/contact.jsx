import React from 'react';
import './contact.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import {motion} from "framer-motion";

const Contact = () => {

  const variants4 = (duration) => ({
    initial: {  y: -10 },
    visible: {
     y: [-7, 7],
      transition: { repeat: Infinity, duration: duration, ease: "linear", repeatType: "reverse" }
    }
  })

  return (
    <div className='contact' id='contact'>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear"}}
      >Get in Touch</motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "linear"}}

      >Want to get in touch? You can reach me out through Instagram, Linkedin or through email.</motion.p>
      <div className='contact-icons'>
        <motion.a variants={variants4(2)} initial ="initial" animate="visible" href='https://www.instagram.com/abhign_tinku/' target='_blank' rel='noopener noreferrer'><FaInstagram /></motion.a>
        <motion.a  variants={variants4(2.25)} initial ="initial" animate="visible" href='https://www.linkedin.com/in/gattu-abhign-2b079b243/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></motion.a>
        <motion.a variants={variants4(2)} initial ="initial" animate="visible" href='mailto:abhigngattu@gmail.com' target='_blank' rel='noopener noreferrer'><FaEnvelope /></motion.a>
        <motion.a variants={variants4(2.25)} initial ="initial" animate="visible" href='https://github.com/Abhign-123' target='_blank' rel="noopener noreferrer"><FaGithub /></motion.a>
      </div>
    </div>
  );
};

export default Contact;