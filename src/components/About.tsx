import React from "react";
import { FiAward, FiMapPin } from "react-icons/fi";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { aboutParagraphs, education, profile } from "../data/portfolio";

const focusAreas = [
  "Full-Stack Web",
  "Mobile Apps",
  "ERP / POS Systems",
  "AI & Agents",
];

const About: React.FC = () => (
  <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <SectionHeading index="01." title="About me" />

    <div className="grid items-start gap-12 md:grid-cols-5">
      <div className="md:col-span-3">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="card mt-6 flex items-start gap-4 border-l-2 border-l-accent p-5">
            <FiAward className="mt-1 shrink-0 text-xl text-accent" />
            <p className="text-heading">
              {education.degree} from{" "}
              <span className="font-semibold text-accent">{education.school}</span>{" "}
              ({education.year}) —{" "}
              <span className="font-semibold text-accent">{education.honors}</span>.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 mb-3 text-sm text-muted">Areas I focus on:</p>
          <ul className="grid grid-cols-2 gap-2 text-sm sm:max-w-md">
            {focusAreas.map((a) => (
              <li key={a} className="flex items-center gap-2 text-text">
                <span className="text-accent">▹</span>
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="md:col-span-2">
        <div className="group relative mx-auto w-full max-w-xs">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={profile.photo}
              alt={profile.name}
              loading="lazy"
              className="w-full rounded-2xl object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-accent/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          </div>
          <span className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
            <FiMapPin className="text-accent" /> {profile.location}
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
