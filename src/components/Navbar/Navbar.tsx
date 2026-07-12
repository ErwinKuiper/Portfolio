import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Spin as Hamburger } from "hamburger-react";

import styles from "./Navbar.module.css";
import LinkedinIcon from "../../assets/LinkedInIcon.png";
import GitHubIcon from "../../assets/GitHubIcon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar with name and both mobile and desktop navigation */}
      <div className={styles.navBar}>
        <h1>Erwin Kuiper</h1>

        <div className={styles.hamburgerWrapper}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className={styles.navRow}>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/projects">Projects</NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div className={`${styles.navTile} ${isOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

        <hr className={styles.divider} />

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/erwin-kuiper-447818222/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/ErwinKuiper" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;