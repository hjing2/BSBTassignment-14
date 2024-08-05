// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Basic Info</Link></li>
          <li><Link to="/workexperience">Work</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/developer-setup">Developer Setup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
