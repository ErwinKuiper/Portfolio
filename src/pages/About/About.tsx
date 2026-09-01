import Experience from "../../components/Experience/Experience";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>My journey</h1>
      <div className={styles.aboutText}>
        <p>
          After finishing high school, I wanted to do something in tech. As a
          teen, I was interested in game development. My parents, however,
          felt that software development was a very competitive job market, and
          recommended I pursue something in science instead, since I had good
          grades in physics and chemistry. I listened to that advice and started
          studying to become an all-round laboratory technician.
        </p>

        <p>
          Later, during an internship as part of that program, I realized I
          didn't see myself doing that job for the rest of my life, so I
          stopped. After that, I followed my initial instinct and pursued
          software development instead. Since I hadn't finished the lab
          technician program, I couldn't immediately start a bachelor's degree
          in IT, so I first completed a vocational program in Software
          Development at MBO Rijnland. There, I learned the basics of HTML and
          CSS in the first year, and later moved into backend development with
          PHP and databases like MySQL.
        </p>

        <p>
          After graduating from that program, I felt my skills still weren't
          strong enough, so I started a bachelor's degree in Software
          Engineering at the Amsterdam University of Applied Sciences. The first
          year wasn't too difficult thanks to my background in vocational
          education, but the second year introduced new challenges. I learned
          Java, Spring Boot, and got some exposure to app development with
          Flutter and Firebase.
        </p>

        <p>
          I've worked on personal projects before this portfolio, but I tend to
          be pretty nitpicky with my own work, which has sometimes meant losing
          motivation before finishing. This portfolio is actually the first
          project I've seen through to completion, and I'm planning to keep
          building on it.
        </p>
      </div>

      <Experience />
    </div>
  );
}

export default About;
