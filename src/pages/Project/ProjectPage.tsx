import * as React from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import { projects, type Project } from "../../data/projects";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import styles from "./Project.module.css";

function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = React.useState(false);

  const project: Project | undefined = projects.find(
    (p) => p.id === Number(id),
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectHeader}>
        <div className={styles.thumbnailContainer}>
          <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1 className={styles.projectTitle}>{project.title}</h1>

            <p className={styles.projectDescription}>
              {project.longDescription}
            </p>
          </div>

          <div className={styles.info}>
            <div className={styles.tags}>
              <p className={styles.projectTitle}>Tech stack</p>

              <div className={styles.tagList}>
                {project.tags?.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
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
        </div>
      </div>

      <p className={styles.sectionLabel}>Project images</p>
      <div className={styles.projectImages}>
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} image ${index + 1}`}
            className={styles.projectImage}
            onClick={() => setOpen(true)}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={project.images.map((image) => ({ src: image }))}
        plugins={[Thumbnails, Counter, Zoom]}
      />
    </div>
  );
}

export default ProjectPage;
