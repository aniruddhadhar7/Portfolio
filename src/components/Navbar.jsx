import { useState } from "react";
import "./Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand brand" href="#home" onClick={closeMenu}>
          Aniruddha's Portfolio
        </a>

        <div className="d-flex align-items-center d-lg-none">
          <button 
            className="theme-toggle-btn me-2" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="menu">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            <li className="nav-item d-none d-lg-block ms-lg-3">
              <button 
                className="theme-toggle-btn" 
                onClick={toggleTheme} 
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}