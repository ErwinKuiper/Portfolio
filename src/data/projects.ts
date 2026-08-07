import portfolioThumbnail from "../assets/projects/Portfolio/Portfolio_Thumbnail.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags?: string[];
  githubLink?: string;
  liveLink?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and TypeScript to showcase my projects and skills.",
    thumbnail: portfolioThumbnail,
    images: [portfolioThumbnail],
    tags: ["React", "TypeScript", "HTML", "CSS"],
    liveLink: "https://erwinkuiper.com",
  },
];
