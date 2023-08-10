import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <h3>Languages</h3>
          <ul>
            <li>C++</li>
            <li>Swift</li>
            <li>Python</li>
            {/* Add more back-end skills */}
          </ul>
        </div>
        <div className="skill">
          <h3>Front-end Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            {/* Add more front-end skills */}
          </ul>
        </div>
        <div className="skill">
          <h3>Back-end Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Database (SQL, MongoDB)</li>
            {/* Add more back-end skills */}
          </ul>
        </div>
        <div className="skill">
          <h3>Hands On</h3>
          <ul>
            <li>Radhat</li>
            <li>Blender</li>
            <li>Unity</li>
            {/* Add more back-end skills */}
          </ul>
        </div>
        
        {/* Add more skill categories */}
      </div>
    </section>
  );
};

export default Skills;
