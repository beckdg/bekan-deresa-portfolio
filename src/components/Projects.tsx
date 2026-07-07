import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiStar } from "react-icons/fi";
import { SectionHeading } from "./ui/SectionHeading";
import { projects, type Project } from "../data/portfolio";

const categories = ["All", "Web", "Mobile", "AI", "ERP"] as const;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="card card-hover group flex flex-col overflow-hidden"
  >
    <div
      className="relative flex h-40 items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:16px_16px]" />
      <span className="relative select-none text-6xl font-black text-white/90 drop-shadow">
        {project.title.charAt(0)}
      </span>
      {project.featured && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          <FiStar size={12} /> Featured
        </span>
      )}
      <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
        {project.category}
      </span>
    </div>

    <div className="flex flex-grow flex-col p-6">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-xl text-text">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
            aria-label={`${project.title} source code`}
          >
            <FaGithub />
          </a>
        )}
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
            aria-label={`${project.title} live demo`}
          >
            <FiExternalLink />
          </a>
        )}
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm font-medium text-accent link-underline"
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        index="05."
        title="Selected work"
        subtitle="A few projects I'm proud of. Filter by category to explore more."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:border-accent/40 hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
