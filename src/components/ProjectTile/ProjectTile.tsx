import type { Project } from "../../data/projects";
import styles from "./ProjectTile.module.css";

type ProjectTileProps = {
  project: Project;
};

function ProjectTile({ project }: ProjectTileProps) {
  return (
    <>
      <div className={styles.projectTile}>
        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />

        <div className={styles.textContainer}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        
        <div className={styles.tags}>
          {project.tags?.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
