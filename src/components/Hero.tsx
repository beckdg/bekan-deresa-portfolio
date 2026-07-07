import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown, FiMail, FiMapPin } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import { EASE } from "./ui/Reveal";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const Hero: React.FC = () => {
  const typed = useTyping(profile.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="aurora" />
      <div className="pointer-events-none absolute inset-0 grid-overlay" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8"
      >
        <motion.div variants={item}>
          {profile.available && (
            <span className="chip mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new opportunities
            </span>
          )}
        </motion.div>

        <motion.p variants={item} className="mb-3 font-mono text-accent">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 min-h-[1.3em] text-3xl font-bold text-muted sm:text-4xl md:text-5xl"
        >
          <span className="gradient-text">{typed}</span>
          <span className="typing-cursor" />
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <FiMapPin className="text-accent" /> {profile.location}
          </span>
          <a
            href={socials.email}
            className="inline-flex items-center gap-2 link-underline hover:text-accent"
          >
            <FiMail className="text-accent" /> {profile.email}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn-outline">
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-3 text-2xl text-text">
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
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.8 } }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
};

export default Hero;
