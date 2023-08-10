import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset to your header height
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset to your header height
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset to your header height
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

