import styles from "./Home.module.css";

import Erwin from "../../assets/Erwin.jpeg";

function Home() {
  return (
    <div className={styles.homeContainer}>
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
          <p>{"const engineer = {"}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;role: "SE student, AUAS",</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;frontend: ["HTML", "CSS", "TypeScript"],
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;backend: ["Java", "TypeScript"],</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;databases: ["MySQL"],</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;frameworks: ["React", "Springboot"],</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;status: "open to internships"</p>
          <p>{"}"}</p>
        </div>
      </div>

      <div className={styles.ctaRow}>
        <button className={styles.ctaPrimary} type="button">
          View Projects
        </button>
        <button className={styles.ctaSecondary} type="button">
          Get in Touch
        </button>
      </div>

      <div className={styles.statRow}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>3rd</span>
          <span className={styles.statLabel}>Year student</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}>1</span>
          <span className={styles.statLabel}>Projects in progress</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}>NL</span>
          <span className={styles.statLabel}>Based</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
