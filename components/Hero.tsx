import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "ERP System Builder",
  "AI & Agent Developer",
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center md:text-left"
    >
      <div className="max-w-4xl">
        <h1
          className="text-lg text-[#64ffda] font-mono mb-4 animate-fade-in-down"
          style={{ animationDelay: "100ms" }}
        >
          Hi, my name is
        </h1>
        <h2
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#ccd6f6] tracking-tight animate-fade-in-down"
          style={{ animationDelay: "200ms" }}
        >
          Bekan Deresa.
        </h2>
        <h3
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#8892b0] tracking-tight mt-2 animate-fade-in-down min-h-[1.2em]"
          style={{ animationDelay: "300ms" }}
        >
          {roles[roleIndex].substring(0, charIndex)}
          <span className="typing-cursor"></span>
        </h3>
        <p
          className="mt-6 max-w-2xl text-lg text-[#8892b0] animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          I build web & mobile apps, ERP systems, and AI-powered solutions.
          Based in <span className="text-[#64ffda]">Addis Ababa & Bishoftu, Ethiopia</span>.
        </p>
        <div
          className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded-md font-medium transition-all duration-300 hover:bg-[#64ffda] hover:bg-opacity-10"
          >
            Check out my work!
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-md font-medium transition-all duration-300 hover:bg-[#64ffda]/80"
          >
            <FaDownload /> Resume
          </a>
          <div className="flex items-center gap-4 ml-2 text-2xl text-[#a8b2d1]">
            <a
              href="https://github.com/beckdg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
