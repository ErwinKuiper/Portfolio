import { Link } from "react-router-dom";

import styles from "./Home.module.css";

import Erwin from "../../assets/Erwin.jpeg";
import Experience from "../../components/Experience/Experience";

function Home() {
  return (
    <>
      <div className={styles.homeHeroContainer}>
        <div className={styles.topText}>
          <p className={styles.eyebrow}>Software Engineering Student</p>
        </div>

        <div className={styles.photoContainer}>
          <img src={Erwin} alt="Erwin Kuiper" className={styles.photo} />
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Open to internships
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <div className={styles.terminalDot}></div>
            <div className={styles.terminalDot}></div>
            <div className={styles.terminalDot}></div>
          </div>

          <div className={styles.terminalBody}>
            <p>
              <span className={styles.keyword}>const</span>{" "}
              <span className={styles.variable}>engineer</span> = {"{"}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>role</span>:{" "}
              <span className={styles.string}>"SE student, AUAS"</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.key}>frontend</span>: [
              <span className={styles.string}>"HTML"</span>,{" "}
              <span className={styles.string}>"CSS"</span>,{" "}
              <span className={styles.string}>"TypeScript"</span>],
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.key}>backend</span>: [
              <span className={styles.string}>"Java"</span>,{" "}
              <span className={styles.string}>"TypeScript"</span>],
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.key}>databases</span>: [
              <span className={styles.string}>"MySQL"</span>],
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.key}>frameworks</span>: [
              <span className={styles.string}>"React"</span>,{" "}
              <span className={styles.string}>"Springboot"</span>],
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>status</span>
              : <span className={styles.string}>"open to internships"</span>
            </p>
            <p>{"}"}</p>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <Link to="/projects">
            <button className={styles.ctaPrimary} type="button">
              View Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className={styles.ctaSecondary} type="button">
              Get in Touch
            </button>
          </Link>
        </div>

        <div className={styles.statRow}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>3rd</span>
            <span className={styles.statLabel}>Year student</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>Project in progress</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>NL</span>
            <span className={styles.statLabel}>Based</span>
          </div>
        </div>
      </div>

      <div className={styles.experienceContainer}>
        <Experience />
      </div>
    </>
  );
}

export default Home;
