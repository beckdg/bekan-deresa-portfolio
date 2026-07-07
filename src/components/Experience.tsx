import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { experiences, profile } from "../data/portfolio";

const Experience: React.FC = () => (
  <section id="experience" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <SectionHeading
      index="04."
      title="Experience"
      subtitle="A timeline of the roles and projects that shaped how I build software."
    />

    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

      {experiences.map((exp, i) => {
        const leftSide = i % 2 === 0;
        return (
          <Reveal key={exp.role + exp.period} delay={i * 0.05}>
            <div
              className={`relative mb-10 flex flex-col gap-4 last:mb-0 md:flex-row md:items-center ${
                leftSide ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-4 top-2 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-accent/40 bg-bg text-accent md:left-1/2">
                <FiBriefcase size={14} />
              </div>

              {/* Period (desktop opposite side) */}
              <div
                className={`hidden md:block md:w-1/2 ${
                  leftSide ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}
              >
                <span className="font-mono text-sm text-accent">{exp.period}</span>
              </div>

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  leftSide ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <div className="card p-5">
                  <span className="mb-2 block font-mono text-xs text-accent md:hidden">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-text"
                      >
                        <span className="mt-0.5 text-accent">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>

    <Reveal delay={0.1}>
      <div className="mt-10 text-center">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          View full résumé
        </a>
      </div>
    </Reveal>
  </section>
);

export default Experience;
