import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";

const Footer: React.FC = () => (
  <footer className="border-t border-border">
    <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <a
            href="#hero"
            className="font-mono text-xl font-bold text-accent"
          >
            {profile.initials}
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">
            {profile.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xl text-text">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={socials.email}
            className="transition-colors hover:text-accent hover:-translate-y-0.5"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="font-mono text-xs text-muted">
          Designed & built by {profile.name} · © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
