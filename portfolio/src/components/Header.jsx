import React from 'react';

import img1 from '../images/myProfile.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src= {img1} alt="Your Name" className="profile-pic" />
        <h1>Amit Raj</h1>
        <p>Web Developer</p>
      </div>
    </header>
  );
};

export default Header;
