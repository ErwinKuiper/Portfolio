import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <h1>Erwin Kuiper</h1>

        {/* Desktop navigation */}
        <div className={styles.desktopLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile hamburger */}
        <div className={styles.mobileMenu}>
          <Hamburger
            direction="left"
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;