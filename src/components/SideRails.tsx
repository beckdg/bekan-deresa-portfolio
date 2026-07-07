import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";

const SideRails: React.FC = () => (
  <>
    {/* Left social rail */}
    <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 lg:flex">
      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-text transition-all hover:-translate-y-1 hover:text-accent"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-text transition-all hover:-translate-y-1 hover:text-accent"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href={socials.email}
        className="text-xl text-text transition-all hover:-translate-y-1 hover:text-accent"
        aria-label="Email"
      >
        <FiMail />
      </a>
      <span className="h-24 w-px bg-border" />
    </div>

    {/* Right email rail */}
    <div className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-6 lg:flex">
      <a
        href={socials.email}
        className="font-mono text-xs tracking-widest text-text transition-colors hover:text-accent"
        style={{ writingMode: "vertical-rl" }}
      >
        {profile.email}
      </a>
      <span className="h-24 w-px bg-border" />
    </div>
  </>
);

export default SideRails;
