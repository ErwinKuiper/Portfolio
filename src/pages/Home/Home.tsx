import styles from "./Home.module.css";

import Erwin from "../../assets/Erwin.jpeg";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainerMobile}>
        <img className={styles.heroImage} src={Erwin} alt="Erwin Kuiper" />
        <div className={styles.heroText}>
          <h1 className={styles.textBox}>Hi, I'm Erwin Kuiper</h1>
          <p className={styles.textBox}>
            I'm a 25-year-old Software Engineering student at the Amsterdam
            University of Applied Sciences. I'm passionate about software
            development and enjoy building personal projects while exploring new
            technologies.
          </p>
        </div>
      </div>

      <div className={styles.heroContainerDesktop}>
        <div className={styles.nameDesktop}>
          <h1>Erwin</h1>
          <h1>Kuiper</h1>
        </div>

        <div className={styles.heroTextAndImageDesktop}>
          <div className={styles.heroTextDesktop}>
            <h1 className={styles.textBox}>Software Engineer</h1>
            <p className={styles.textBox}>
              I'm a 25-year-old Software Engineering student at the Amsterdam
              University of Applied Sciences. I'm passionate about software
              development and enjoy building personal projects while exploring
              new technologies.
            </p>

            {/* Code for a resume button and LinkedIna and GitHub icons */}
          </div>

          <div className={styles.heroImageDesktop}>
            <img src={Erwin} alt="Erwin Kuiper" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
