import React, { useEffect, useState } from "react";
import "../styles/pages/home.css";
import bgVideo from "../assets/videos/background.mp4";
import showcaseVideo from "../assets/videos/showcase.mp4"; 
import { Link } from "react-router-dom";

const Home = () => {
  const firstLine = "Hi, I am Janani";
  const secondLine = "Hi, I am a Frontend Developer";

  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timer;

    if (phase === 0) {
      let i = 0;
      timer = setInterval(() => {
        setDisplayText(firstLine.slice(0, i + 1));
        i++;
        if (i === firstLine.length) {
          clearInterval(timer);
          setTimeout(() => setPhase(1), 900);
        }
      }, 100);
    } else if (phase === 1) {
      let i = 0;
      timer = setInterval(() => {
        setDisplayText(secondLine.slice(0, i + 1));
        i++;
        if (i === secondLine.length) {
          clearInterval(timer);
          setPhase(2);
        }
      }, 85);
    }

    return () => clearInterval(timer);
  }, [phase]);

  return (
    <section className="home">
      {/* Background video */}
      <video className="bg-video" src={bgVideo} autoPlay muted loop playsInline />
      <div className="home-overlay" />

      <div className="home-container">
        {/* LEFT SECTION */}
        <div className="home-content">
          <h1 className="typing-text">
            {displayText}
            <span className={`cursor ${phase === 2 ? "cursor-hidden" : ""}`} />
          </h1>

          {phase === 2 && (
            <>
              <p className="about-text">
                I’m a passionate frontend developer who loves building beautiful,
                responsive, and interactive web experiences using{" "}
                <strong>React.js</strong>. I focus on crafting elegant UI,
                smooth user interactions, and clean maintainable code.
              </p>

              <div className="btn-group">
                <Link to="/projects" className="btn-cta">View My Work</Link>
                <Link to="/about" className="btn-cta about-btn">About Me</Link>
              </div>
            </>
          )}
        </div>

        {/* RIGHT — VIDEO SHOWCASE */}
        <div className="home-video-container">
          <video className="home-video" autoPlay muted loop playsInline>
            <source src={showcaseVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Home;
