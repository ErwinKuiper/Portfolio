import portfolioThumbnail from "../assets/projects/Portfolio/Portfolio_Thumbnail.png";
import portfolioProjects from "../assets/projects/Portfolio/Portfolio_Projects.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
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
    "My personal portfolio website I build with React and TypeScript. Here I'll showcase my projects and skills.",
    longDescription:
      "This is my personal portfolio website that I built using React and TypeScript. The website serves as a platform to showcase my (school) projects, skills and experience. Design isn't my strongest skill, but I tried to make it look as good as possible. The website is fully responsive and works on all devices.",
    thumbnail: portfolioThumbnail,
    images: [portfolioThumbnail, portfolioProjects],
    tags: ["React", "TypeScript", "HTML", "CSS"],
    githubLink: "https://github.com/ErwinKuiper/Portfolio",
    liveLink: "https://erwinkuiper.com",
  },
];
