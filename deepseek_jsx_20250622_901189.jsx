import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/projects" className="nav-btn">Projects</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
        <a 
          href="/resume.pdf" 
          className="nav-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

function Socials() {
  return (
    <div className="socials">
      <a 
        href="https://github.com/yourprofile" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <img src="github-icon.png" alt="GitHub" />
      </a>
      <a 
        href="https://linkedin.com/in/yourprofile" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <img src="linkedin-icon.png" alt="LinkedIn" />
      </a>
      <a 
        href="mailto:you@example.com" 
        className="social-btn"
      >
        <img src="email-icon.png" alt="Email" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Socials />
      {/* Add your <Routes> component here */}
    </div>
  );
}

export default App;