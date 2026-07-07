import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile, socials } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

type Props = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-card" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className="grid h-10 w-10 place-items-center rounded-xl border border-accent/40 font-mono text-lg font-bold text-accent transition-transform hover:scale-105 hover:shadow-glow"
          aria-label="Home"
        >
          {profile.initials}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-text hover:text-accent"
                  }`}
                >
                  <span className="font-mono text-xs text-accent/70">
                    0{i + 1}.
                  </span>{" "}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-text transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-outline !px-4 !py-2 md:inline-flex"
          >
            Resume
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-3 text-text transition-colors hover:bg-surface hover:text-accent"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}.
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-3 px-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-text hover:text-accent"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-text hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline ml-auto !px-4 !py-2"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
