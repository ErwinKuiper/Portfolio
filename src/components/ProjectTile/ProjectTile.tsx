import type { Project } from "../../data/projects";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectTile.module.css";
import { NavLink } from "react-router-dom";

type ProjectTileProps = {
  project: Project;
};

function ProjectTile({ project }: ProjectTileProps) {
  return (
    <>
      <div className={styles.projectTile}>
        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />

        <div className={styles.textContainer}>
          <NavLink to={`/project/${project.id}`} className={styles.title}>
            {project.title}
          </NavLink>
          <p>{project.description}</p>
        </div>

        <div className={styles.tags}>
          {project.tags?.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
