import React from 'react';
import { FaCode, FaCodepen, FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import video from '../video/DSC.mp4';

import img1 from '../images/myProfile.jpg'

const Header = () => {
  return (
    <header className="header">


      <video autoPlay loop muted playsInline className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
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
      </div>
      </div>
    </header>
  );
};

export default Header;
