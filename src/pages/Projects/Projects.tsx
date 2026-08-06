import ProjectTile from "../../components/ProjectTile/ProjectTile";
import { projects } from "../../data/projects";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}

export default Projects