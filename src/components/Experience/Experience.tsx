import { useState } from "react";

import styles from "./Experience.module.css";

import Farmeda from "../../assets/Farmeda.jpg";

import VLC from "../../assets/VLC.jpeg";
import Rijnland from "../../assets/Rijnland.jpeg";
import AUAS from "../../assets/HVA.png";

function Experience() {
    const [selectedTab, setSelectedTab] = useState<"work" | "education">("work");

  return (
    <>
      <p className={styles.experienceTitle}>Experience</p>
      <div className={styles.experienceContainer}>
        <div className={styles.selector}>
          <button className={`${styles.selectorButton} ${selectedTab === "work" ? styles.active : ""}`} onClick={() => setSelectedTab("work")}>Work</button>
          <button className={`${styles.selectorButton} ${selectedTab === "education" ? styles.active : ""}`} onClick={() => setSelectedTab("education")}>Education</button>
        </div>

        <div className={`${styles.workExperience} ${selectedTab === "work" ? styles.visible : styles.hidden}`}>
            <div className={styles.experienceItem}>
                <div className={styles.experienceImageContainer}>
                    <img src={Farmeda} alt="Farmeda" className={styles.experienceImage} />
                </div>

                <div className={styles.experienceDetails}>
                    <p className={styles.experienceSub}>Feb 2024 - Jul 2024</p>
                    <p className={styles.experienceItemTitle}>Farmeda</p>
                    <p className={styles.experienceSub}>Software Developer - Internship</p>
                    <p>Contributed to the development of ASKV's internal case management platform.</p>
                    <ul>
                        <li>Implemented features for managing additional client information.</li>
                        <li>Developed import and export functionality for transferring client records between departments</li>
                        <li><b>Technologies</b>: PHP, Laravel, MySQL</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={`${styles.education} ${selectedTab === "education" ? styles.visible : styles.hidden}`}>
            <div className={styles.experienceItem}>
                <div className={styles.experienceImageContainer}>
                    <img src={AUAS} alt="AUAS" className={styles.experienceImage} />
                </div>
                <div className={styles.experienceDetails}>
                    <p className={styles.experienceSub}>Sept 2024 - Present</p>
                    <p className={styles.experienceItemTitle}>Amsterdam University of Applied Sciences</p>
                    <p className={styles.experienceSub}>Bachelor Software Engineering</p>
                </div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.experienceImageContainer}>
                    <img src={Rijnland} alt="Rijnland" className={styles.experienceImage} />
                </div>
                <div className={styles.experienceDetails}>
                    <p className={styles.experienceSub}>Aug 2020 - Jul 2024</p>
                    <p className={styles.experienceItemTitle}>MBO Rijnland</p>
                    <p className={styles.experienceSub}>Software Developer MBO</p>
                </div>
            </div>

            <div className={styles.experienceItem}>
                <div className={styles.experienceImageContainer}>
                    <img src={VLC} alt="VLC" className={styles.experienceImage} />
                </div>
                <div className={styles.experienceDetails}>
                    <p className={styles.experienceSub}>Aug 2013 - Jun 2017</p>
                    <p className={styles.experienceItemTitle}>Veenlanden College</p>
                    <p className={styles.experienceSub}>VMBO-T</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
