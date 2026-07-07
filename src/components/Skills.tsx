import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";
import { skillGroups } from "../data/portfolio";

const Skills: React.FC = () => (
  <section id="skills" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <SectionHeading
      index="03."
      title="Tech stack"
      subtitle="The tools and technologies I reach for to build reliable, modern products."
    />

    <div className="space-y-10">
      {skillGroups.map((group, gi) => (
        <Reveal key={group.category} delay={gi * 0.04}>
          <div className="mb-4 flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {group.category}
            </h3>
            <span className="h-px flex-1 bg-border" />
          </div>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap gap-3"
          >
            {group.items.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.li key={skill.name} variants={staggerItem}>
                  <div className="card card-hover group flex items-center gap-2.5 px-4 py-2.5">
                    <Icon
                      className="text-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-text">
                      {skill.name}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
