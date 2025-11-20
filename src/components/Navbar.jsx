import { NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
import { useTheme } from "../hooks/useTheme";
import logo1 from "../assets/images/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <NavLink to="/" className="logo-section">
          <img src={logo1} alt="Logo" className="logo-img" />
          <h2 className="logo-text">Janani</h2>
        </NavLink>

        {/*  Hamburger Icon (Mobile Only) */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/*  Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/" end>Home</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/projects">Projects</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/skills">Skills</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/resume">Resume</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink></li>
        </ul>

        {/*  Theme Toggle */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
