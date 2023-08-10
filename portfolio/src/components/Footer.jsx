import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* Add more social icons here */}
      </div>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
