import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiGithubactions,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */
export const profile = {
  name: "Bekan Deresa",
  initials: "BD",
  roles: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "ERP System Builder",
    "AI & Agent Developer",
  ],
  tagline: "I design and build web, mobile & AI-powered products.",
  intro:
    "I turn complex problems into simple, elegant products — from responsive web apps and cross-platform mobile experiences to ERP systems and intelligent AI agents.",
  location: "Addis Ababa & Bishoftu, Ethiopia",
  email: "bekanderesa27@gmail.com",
  resume: "/resume.pdf",
  available: true,
  photo: "/images/about.jpg",
};

/* -------------------------------------------------------------------------- */
/*  Social links                                                               */
/* -------------------------------------------------------------------------- */
export const socials = {
  github: "https://github.com/beckdg",
  linkedin: "https://linkedin.com/in/beckdg",
  email: `mailto:${profile.email}`,
};

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  Stats                                                                      */
/* -------------------------------------------------------------------------- */
export const stats = [
  { value: 4, suffix: "+", label: "Years building" },
  { value: 30, suffix: "+", label: "Projects shipped" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 15, suffix: "+", label: "Happy clients" },
];

/* -------------------------------------------------------------------------- */
/*  About highlights                                                           */
/* -------------------------------------------------------------------------- */
export const aboutParagraphs = [
  "I'm a full-stack and mobile developer based in Ethiopia, with a strong focus on shipping products that are fast, reliable, and genuinely useful. I enjoy owning a feature end-to-end — from the database schema to the pixel-perfect UI.",
  "Over the last few years I've built web platforms, cross-platform mobile apps, ERP/POS systems, and AI-powered tools including LLM fine-tuning and autonomous agents. I care deeply about clean architecture, thoughtful UX, and writing code teammates can maintain.",
];

export const education = {
  degree: "BSc in Software Engineering",
  school: "Adama Science and Technology University",
  year: "2026",
  honors: "Very Great Distinction",
};

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */
export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Responsive, accessible, and blazing-fast web apps built with modern React and TypeScript.",
    bullets: ["React / Next.js", "TypeScript", "REST & APIs", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with a native feel, shipped to the Play Store and beyond.",
    bullets: ["Flutter & Dart", "Firebase", "Offline-first", "Push notifications"],
  },
  {
    title: "ERP & Business Systems",
    description:
      "Custom POS, inventory, and management systems that streamline real-world operations.",
    bullets: ["Dashboards", "Inventory / POS", "Role-based auth", "Reporting"],
  },
  {
    title: "AI & Agents",
    description:
      "Intelligent, LLM-powered features and autonomous agents integrated into your product.",
    bullets: ["LLM fine-tuning", "RAG pipelines", "AI agents", "Generative AI"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills (grouped)                                                           */
/* -------------------------------------------------------------------------- */
export type Skill = { name: string; icon: IconType; color: string };

export const skillGroups: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#e6f1ff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#54c5f8" },
      { name: "Dart", icon: SiDart, color: "#2dd4bf" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
      { name: "Express", icon: SiExpress, color: "#e6f1ff" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
      { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c" },
      { name: "LLM & Agents", icon: SiOpenai, color: "#10a37f" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: FaDocker, color: "#2496ed" },
      { name: "AWS", icon: FaAws, color: "#ff9900" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experience                                                                 */
/* -------------------------------------------------------------------------- */
export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Full-Stack & AI Developer",
    company: "Freelance / Personal Projects",
    description:
      "Designing and shipping full-stack products with an increasing focus on AI-powered features.",
    highlights: [
      "Built web & mobile apps with React, Flutter, and Node.js",
      "Developed ERP solutions and AI agents using LLM fine-tuning & RAG",
      "Owned projects end-to-end from architecture to deployment",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Software Engineering Intern",
    company: "Maedot Educational Technology",
    description:
      "Contributed to digital learning applications within a cross-functional engineering team.",
    highlights: [
      "Wrote clean, efficient code for responsive user features",
      "Collaborated using Agile to debug and improve performance",
      "Bridged academic concepts with real industry practice",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Mobile App Developer",
    company: "Freelance",
    description:
      "Designed and delivered cross-platform mobile apps for local clients.",
    highlights: [
      "Built Flutter apps with a native look and feel",
      "Integrated Firebase auth, real-time DB & push notifications",
      "Published apps to the Google Play Store",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Web Developer",
    company: "Freelance",
    description:
      "Built responsive web applications and business tools for local businesses.",
    highlights: [
      "Delivered dashboards, e-commerce & inventory systems",
      "Used React, TailwindCSS, and Node.js",
      "Focused on performance and clean, reusable UI",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */
export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  site?: string;
  featured?: boolean;
  category: "Web" | "Mobile" | "AI" | "ERP";
  accent: [string, string];
};

export const projects: Project[] = [
  {
    title: "Bishoftu Ride",
    description:
      "A sleek, user-friendly ride-hailing mobile app prototype for a local market — real-time trip flow, map integration, and a polished onboarding experience.",
    tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
    github: "https://github.com/beckdg/bishoftu-ride",
    site: "https://bishofturide.vercel.app",
    featured: true,
    category: "Mobile",
    accent: ["#54c5f8", "#2dd4bf"],
  },
  {
    title: "CampusCraft",
    description:
      "A web platform where students network, showcase projects, and collaborate — complete with profiles, project feeds, and real-time interaction.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/beckdg/campus-craft",
    site: "https://campuscraft.vercel.app",
    featured: true,
    category: "Web",
    accent: ["#61dafb", "#3c873a"],
  },
  {
    title: "Oda Shop Manager",
    description:
      "A comprehensive Point-of-Sale and inventory management system for retail shops, with stock tracking, sales analytics, and receipt printing.",
    tags: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/beckdg/oda-shop-manager",
    site: "https://odashop.vercel.app",
    featured: true,
    category: "ERP",
    accent: ["#38bdf8", "#0ea5e9"],
  },
  {
    title: "EventHub",
    description:
      "A full-featured event booking and ticketing web app — from concerts to workshops — with secure Stripe payments and organizer dashboards.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    github: "https://github.com/beckdg/event-hub",
    site: "https://eventhub.vercel.app",
    category: "Web",
    accent: ["#a78bfa", "#6366f1"],
  },
  {
    title: "FitLife Tracker",
    description:
      "A mobile app to track fitness goals, log workouts, and monitor progress over time with offline-first local storage.",
    tags: ["Flutter", "SQLite", "Provider"],
    github: "https://github.com/beckdg/fitlife-tracker",
    site: "https://fitlife.vercel.app",
    category: "Mobile",
    accent: ["#34d399", "#10b981"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                               */
/* -------------------------------------------------------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bekan delivered our inventory system ahead of schedule and it just works. He understood our business needs and translated them into a tool our staff actually enjoy using.",
    name: "Retail Client",
    title: "Shop Owner, Bishoftu",
  },
  {
    quote:
      "Clean code, great communication, and a real eye for UX. The mobile app he built felt native and polished from day one.",
    name: "Startup Founder",
    title: "Early-stage Startup",
  },
  {
    quote:
      "He picked up our codebase quickly during his internship and shipped features that improved performance noticeably. A reliable, curious engineer.",
    name: "Engineering Lead",
    title: "Maedot Educational Technology",
  },
];
