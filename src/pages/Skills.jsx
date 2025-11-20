import React from "react";
import "../styles/pages/skills.css";
import htmlLogo from "../assets/icons/htmlLogo.png";
import cssLogo from "../assets/icons/cssLogo.webp";
import jsLogo from "../assets/icons/jsLogo.png";
import bootstrapLogo from "../assets/icons/bootstrapLogo.png";
import reactLogo from "../assets/icons/reactLogo.png";
import gitLogo from "../assets/icons/gitLogo.png";
import vscodeLogo from "../assets/icons/vscodeLogo.webp";
import gitHubLogo from "../assets/icons/gitHubLogo.png";
import firebaseLogo from "../assets/icons/firebaseLogo.png";



const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-subtitle">
        I specialize in building responsive, user-friendly, and modern web interfaces 
        using cutting-edge frontend technologies.
      </p>

      {/* ------------ TECH STACK ------------ */}
      <div className="tech-stack">
        <div className="tech-item">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="tech-item">
          <img src={cssLogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="tech-item">
          <img src={jsLogo} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="tech-item">
          <img src={bootstrapLogo} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="tech-item">
          <img src={reactLogo} alt="React" />
          <p>React.js</p>
        </div>
        <div className="tech-item">
          <img src={gitLogo} alt="Git" />
          <p>Git</p>
        </div>
        <div className="tech-item">
          <img src={gitHubLogo} alt="Git" />
          <p>GitHub</p>
        </div>
         <div className="tech-item">
          <img src={firebaseLogo} alt="Git" />
          <p>Firebase</p>
        </div>
        <div className="tech-item">
          <img src={vscodeLogo} alt="VS Code" />
          <p>VS Code</p>
        </div>
      </div>

      {/* ------------ PERSONAL SKILLS ------------ */}
      <div className="personal-section">
        <h2 className="skills-title">Personal Skills</h2>
        <p className="skills-subtitle">
          Beyond technical expertise, I believe strong personal qualities 
          make a professional stand out. My experience as an 
          <strong> NCC Cadet</strong> has strengthened my sense of 
          discipline, teamwork, and leadership.
        </p>

        <ul className="personal-list">
          <li>💪 Discipline and Time Management</li>
          <li>🧭 Leadership and Team Coordination</li>
          <li>🗣️ Effective Communication</li>
          <li>⚡ Quick Learning and Adaptability</li>
          <li>🤝 Collaboration and Problem Solving</li>
          <li>🎯 Commitment and Responsibility</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;