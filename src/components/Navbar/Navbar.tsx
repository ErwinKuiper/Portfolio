import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.mobileNav}>
        <h1>Erwin Kuiper</h1>
        <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />
      </nav>

      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
