
import Aboutme from './about.jsx';
import './App.css';
import NavBar from './NavBar.jsx';
import Technologies from './technologies.jsx';
import Experience from './experience.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Aboutme />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
