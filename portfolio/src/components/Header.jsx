import React from 'react';
import { FaCode, FaCodepen, FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';


import img1 from '../images/myProfile.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-icons">
        <a href="https://www.codechef.com/users/amit_official" target="_blank" rel="noopener noreferrer">
          <FaCode className="animated-icon"/>
        </a>
        <a href="https://codeforces.com/profile/amit_raj_official" target="_blank" rel="noopener noreferrer">
          <FaCodepen className="animated-icon"/>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="animated-icon"/>
        </a>
        <a href="mailto:your.amitraj7079@gmail.com">
          <FaEnvelope className="animated-icon"/>
        </a>
        <a href="https://github.com/AmitRaj2001" target="_blank" rel="noopener noreferrer">
          <FaGithub className="animated-icon"/>
        </a>
        <a href="https://www.instagram.com/amit.raj____/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="animated-icon"/>
        </a>
      </div>
      <div className="header-content">
        <img src= {img1} alt="Your Name" className="profile-pic"  />
        <h1 className="animated-icon">Amit Raj</h1>
        <p>Software Engneer</p>
      </div>
    </header>
  );
};

export default Header;
