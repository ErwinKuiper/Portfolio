import { Link } from "react-router-dom";

import styles from './Footer.module.css';

function Footer() {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.name}>Erwin Kuiper</h1>
                    <p className={styles.description}>Software Engineering Student at Amsterdam University of Applied Sciences</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.smallNav}>
                        <p>Navigate</p>
                        <Link className={styles.link} to="/">Home</Link>
                        <Link className={styles.link} to="/about">About</Link>
                        <Link className={styles.link} to="/projects">Projects</Link>
                        <Link className={styles.link} to="/contact">Contact</Link>
                    </div>

                    <div className={styles.smallContact}>
                        <p>Connect</p>
                        <p><a className={styles.link} href="mailto:erwin.kuiper@hotmail.com">Email</a></p>
                        <p><a className={styles.link} href="https://www.linkedin.com/in/erwin-kuiper-447818222/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                        <p><a className={styles.link} href="https://github.com/ErwinKuiper" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;