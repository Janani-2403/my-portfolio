import "../styles/pages/about.css";
import profileImage from "../assets/images/profile.jpg";
import resumePDF from "../assets/resume/Resume final.pdf";


const About = () => (
  <section id="about" className="about-section">
    <h2 className="about-title">About</h2>
    <p className="about-subtitle">
      I’m a passionate <strong>Frontend Developer</strong> dedicated to creating
      modern, user-friendly, and visually appealing web interfaces. My goal is to
      turn ideas into beautifully crafted digital experiences that are both
      functional and engaging.
    </p>

    <div className="about-content">
      {/* Profile Image */}
      <div className="about-image">
        <img src={profileImage} alt="Janani" />
      </div>

      {/* About Details */}
      <div className="about-details">
        <h3>Frontend Developer</h3>
        <p>
          I specialize in building responsive and interactive web applications
          using <strong>React.js</strong>, <strong>JavaScript</strong>, and
          modern UI frameworks. I love transforming designs into real-world
          products that provide seamless user experiences.
        </p>

        <div className="about-info">
          <ul>
            <li><strong>Birthday:</strong> 24 March 2005</li>
            <li><strong>Website:</strong> 
              <a href="https://your-portfolio-link.netlify.app" target="_blank" rel="noreferrer">
                your-portfolio-link.netlify.app
              </a>
            </li>
            <li><strong>Phone:</strong> +91 6380598123</li>
            <li><strong>City:</strong> Erode, India</li>
          </ul>

          <ul>
            <li><strong>Age:</strong> 20</li>
            <li><strong>Degree:</strong> B.Sc., Mathematics</li>
            <li><strong>Email:</strong> jananielr2005@gmail.com</li>
            <li><strong>Languages:</strong> English, Tamil</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Description */}
    <p className="about-description">
      With a strong foundation in <strong>HTML, CSS, Bootstrap, JavaScript, and React</strong>,
      I build elegant and accessible user interfaces. I’m also exploring
      <strong> UI/UX design</strong> principles and animation libraries to make
      each project more interactive. I’m passionate about continuous learning and
      eager to collaborate on projects that make a positive impact.
    </p>

    {/* Download Resume Button */}
   <div className="resume-btn-container">
  <a href={resumePDF} download className="resume-btn">
    📄 Download Resume
  </a>
</div>

  </section>
);

export default About;
