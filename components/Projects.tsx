import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bishoftu Ride",
    description:
      "A sleek and user-friendly prototype for a local ride-hailing mobile app, designed with Flutter.",
    tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
    image: "/images/project-flikchat.jpg",
    github: "https://github.com/beckdg/bishoftu-ride",
    site: "https://bishofturide.vercel.app",
  },
  {
    title: "CampusCraft",
    description:
      "A web platform for students to network, showcase their projects, and collaborate.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/project-campus-craft.jpg",
    github: "https://github.com/beckdg/campus-craft",
    site: "https://campuscraft.vercel.app",
  },
  {
    title: "Oda Shop Manager",
    description:
      "A comprehensive Point of Sale (POS) and inventory management system for stationery shops.",
    tags: ["React", "Firebase", "TailwindCSS"],
    image: "/images/project-oda-shop.jpg",
    github: "https://github.com/beckdg/oda-shop-manager",
    site: "https://odashop.vercel.app",
  },
  {
    title: "EventHub",
    description:
      "A full-featured web application for booking and ticketing events, from concerts to workshops.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/images/project-event-hub.jpg",
    github: "https://github.com/beckdg/event-hub",
    site: "https://eventhub.vercel.app",
  },
  {
    title: "FitLife Tracker",
    description:
      "A mobile app to help users track their fitness goals, log workouts, and monitor progress over time.",
    tags: ["Flutter", "SQLite", "Provider"],
    image: "/images/project-fitlife.jpg",
    github: "https://github.com/beckdg/fitlife-tracker",
    site: "https://fitlife.vercel.app",
  },
];

const ProjectCard: React.FC<(typeof projects)[0]> = ({
  title,
  description,
  tags,
  image,
  github,
  site,
}) => (
  <div className="group relative flex flex-col rounded-lg overflow-hidden glass-morphism transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#64ffda]/20">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{title}</h3>
      <p className="text-[#8892b0] text-sm mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#64ffda] bg-[#112240] px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 flex items-center justify-end space-x-4 text-2xl text-[#a8b2d1]">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64ffda] transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64ffda] transition-colors duration-300"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#ccd6f6] flex items-center justify-center gap-4">
        <span className="text-[#64ffda] font-mono">03.</span> My Projects
        <span className="h-px w-24 bg-[#233554] hidden md:block"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
