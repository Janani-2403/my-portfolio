import React, { useState } from "react";
import "../styles/pages/resume.css";

const Resume = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const projectList = [
    "Pleasant Travel Website – A basic non-responsive travel website that shows popular places using HTML and CSS.",
    "Cake Bliss – A bakery site built in HTML/CSS; supports basic mobile scaling but not fully responsive.",
    "To-Do List App – A responsive task management app to add, update, and delete daily tasks, created using HTML, CSS, and JavaScript.",
    "Weather Dashboard – A fully responsive weather application displaying live temperature and conditions through real-time API calls, built with HTML, CSS, JavaScript, and OpenWeather API.",
    "Expense Tracker – A responsive expense tracking app that lets users record and manage expenses with data stored in LocalStorage, using HTML, CSS, and JavaScript.",
    "Quiz Application – A responsive JavaScript quiz platform that cycles through multiple-choice questions, checks answers in real time, and summarizes performance upon completion.",
    "E-Commerce Shop – A responsive shopping website built with HTML, CSS, and JavaScript, featuring a product gallery and a fully interactive cart for adding and removing items.",
    "My Portfolio – A personal portfolio showcasing skills, resume, and projects using React.js.",
    "Organic Living E-Commerce – A modern e-commerce UI for organic groceries with search and filter options.",
    "RecipeFlow App – Allows users to browse and read full recipes with instructions and ingredients.",
    "Library Management – A web-based UI concept to manage book listings and borrowers.",
    "Google Contact Clone – A contact saving and management interface inspired by Google Contacts."
  ];

  const visibleProjects = showMoreProjects ? projectList : projectList.slice(0, 7);

  const [currentSlide, setCurrentSlide] = useState(0);

// Divide 12 projects into slides of 4
const itemsPerSlide = 4;
const slides = [];

for (let i = 0; i < projectList.length; i += itemsPerSlide) {
  slides.push(projectList.slice(i, i + itemsPerSlide));
}


  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>
      <p className="section-subtitle">
        A blend of technical expertise, creativity, and leadership.
      </p>

      <div className="resume-grid">

        {/* SUMMARY */}
        <div className="resume-box">
          <h3 className="resume-heading">Summary</h3>
          <p><strong>Name:</strong> Janani B</p>
          <p>
            Innovative and deadline-driven <strong>Frontend Developer</strong> with a strong
            foundation in modern web technologies and UI design. Dedicated to building
            responsive, visually appealing, and user-friendly web applications using
            HTML, CSS, JavaScript, Bootstrap, and React.
          </p>
          <ul>
            <li>Erode, Tamil Nadu, India</li>
            <li>+91 6380598123</li>
            <li>jananielr2005@gmail.com</li>
          </ul>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="resume-box">
          <h3 className="resume-heading">Technical Skills</h3>
          <ul style={{ padding: "0px", marginBottom: "50px", lineHeight: "1.9rem" }}>
            <li>HTML, CSS, JavaScript</li>
            <li>Bootstrap, React.js</li>
            <li>Firebase</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
            <li>Canva Design & Video Editing</li>
            <li>Problem Solving</li>
          </ul>
        </div>

        {/* EDUCATION */}
        <div className="resume-box">
          <h3 className="resume-heading">Education</h3>

          <h4>B.Sc Mathematics</h4>
          <p>2022 – 2025</p>
          <p><em>Bharathiar University</em></p>
          <p><strong>CGPA:</strong> 7.39</p>

          <h4>Higher Secondary (HSC)</h4>
          <p>2022</p>
          <p><em>PKP Swamy Matric Hr Sec School, Kalyanipuram</em></p>
          <p><strong>Percentage:</strong> 90.5%</p>

          <h4>Secondary School (SSLC)</h4>
          <p>2020</p>
          <p><em>PKP Swamy Matric Hr Sec School, Kalyanipuram</em></p>
          <p><strong>Percentage:</strong> 90.2%</p>
        </div>

        {/* PROJECTS */}
        {/* PROJECTS */}
<div className="resume-box projects-box">
  <h3 className="resume-heading">Projects</h3>

  {/* ---- Multi-Item Carousel ---- */}
  <div className="projects-carousel">
    <button
      className="carousel-btn"
      onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
    >
      ◀
    </button>

    <div className="carousel-window">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <ul>
              {slide.map((project, i) => (
                <li key={i} className="project-item">
                  <strong>{project.split("–")[0]}</strong> –{" "}
                  {project.split("–")[1]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <button
      className="carousel-btn"
      onClick={() =>
        setCurrentSlide((prev) =>
          Math.min(prev + 1, slides.length - 1)
        )
      }
    >
      ▶
    </button>
  </div>

  {/* Pagination */}
  <p className="carousel-count">
    {currentSlide + 1} / {slides.length}
  </p>
</div>

        {/* CERTIFICATION */}
        <div className="resume-box">
          <h3 className="resume-heading">Certification</h3>
          <p><strong>Frontend Development Course</strong></p>
          <p>
            Successfully completed a certified course on Frontend Development covering
            HTML, CSS, JavaScript, Bootstrap, and React.
          </p>
        </div>

        {/* EXTRA ACTIVITIES */}
        <div className="resume-box">
          <h3 className="resume-heading">Extra-Curricular Activities</h3>
          <ul>
            <li><strong>NCC Cadet</strong> – Built leadership, discipline, and teamwork.</li>
            <li>Active participation in cultural and volunteer activities.</li>
            <li>Event organizer and creative content designer.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Resume;
