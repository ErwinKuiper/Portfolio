import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileNav}>
        <h1>Erwin Kuiper</h1>

        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </>
  );
}

export default Navbar;
