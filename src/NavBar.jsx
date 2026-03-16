import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <div className='nav-bar'>
      <div className='logo'>Abhign Gattu</div>
      
      {/* Hamburger Menu Button */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li id = "home" onClick={closeMenu}>
          <Link activeClass='present' to='about' spy={true} smooth={true} offset={-50} duration={750} >About</Link>
        </li>
        <li onClick={closeMenu}>
        <Link activeClass='present' to='technologies' spy={true} smooth={true} offset={-5} duration={750}>Technologies</Link>
        </li>
        <li onClick={closeMenu}>
        <Link activeClass='present' to='experience' spy={true} smooth={true} offset={-80} duration={750}>Experience</Link>
        </li>
        <li onClick={closeMenu}>
        <Link activeClass='present' to='projects' spy={true} smooth={true} offset={-50} duration={750}>Projects</Link>
        </li>
        <li onClick={closeMenu}>
        <Link activeClass='present' to='contact' spy={true} smooth={true} offset={-50} duration={750}>Contact</Link>
        </li>
      </ul>
    </div>
    </>
    
  );
};

export default NavBar;