import React from 'react';
import './technologies.css';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiBootstrap, DiJava, DiLinux, DiWindows, DiMsqlServer, DiGit, DiGithub, DiVisualstudio, DiNpm, DiPython, DiMysql } from "react-icons/di";
import {motion} from "framer-motion";

const variants2 = (duration) => ({
  initial: {  y: -10 },
  visible: {
   y: [-4, 4],
    transition: { repeat: Infinity, duration: duration, ease: "linear", repeatType: "reverse" }
  }
})
const Technologies = () => {
  return (
    <div className='technologies' id='technologies'>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "linear"}}
      >Technologies</motion.h1>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}

      className='tech-icons'>
        <ul>
          <li className='tech-category'>
            <h4>Frontend Technologies</h4>
            <div className='front-end'>
             <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiHtml5 className='DiHtml5' /></motion.div> 
             <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"> <DiCss3 className='DiCss3' /></motion.div>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiJavascript1 className='DiJavascript1' /></motion.div>
              <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"><DiReact className='DiReact' /></motion.div>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiBootstrap className='DiBootstrap' /></motion.div>
            </div>
          </li>
          <li className='tech-category'>
            <h4>Version Control</h4>
            <div className='version-control'>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiGit className='DiGit' /></motion.div>
              <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"><DiGithub className='DiGithub' /></motion.div>
            </div>
          </li>
          <li className='tech-category'>
            <h4>Databases</h4>
            <div className='databases'>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiMysql className='DiMysql' /></motion.div>
              <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"><DiMsqlServer className='DiMsqlServer' /></motion.div>
            </div>
          </li>
          <li className='tech-category'>
            <h4>Tools</h4>
            <div></div><div className='tools'>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiVisualstudio className='DiVisualstudio' /></motion.div>
             <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"><DiNpm className='DiNpm' /></motion.div> 
            </div>
          </li>
          <li className='tech-category'>
            <h4>Programming Languages</h4>
            <div className='programming-languages'>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiJava className='DiJava' /></motion.div>
             <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"><DiPython className='DiPython' /></motion.div> 
            </div>
          </li>
          <li className='tech-category'>
            <h4>Operating Systems</h4>
            <div className='operating-systems'>
              <motion.div variants={variants2(2)} initial ="initial" animate="visible"><DiLinux className='DiLinux' /></motion.div>
             <motion.div variants={variants2(2.5)} initial ="initial" animate="visible"><DiWindows className='DiWindows' /></motion.div> 
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Technologies;