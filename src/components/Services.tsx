import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiDatabase, FiCpu } from "react-icons/fi";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { services } from "../data/portfolio";

const icons = [FiCode, FiSmartphone, FiDatabase, FiCpu];

const Services: React.FC = () => (
  <section id="services" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
    <SectionHeading
      index="02."
      title="What I do"
      subtitle="End-to-end product development — from the first wireframe to production deployment."
    />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {services.map((service, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.article
            key={service.title}
            variants={staggerItem}
            className="card card-hover group flex flex-col p-6"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-2xl text-accent transition-transform duration-300 group-hover:-translate-y-1">
              <Icon />
            </div>
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-text">
                  <span className="text-accent">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </motion.div>
  </section>
);

export default Services;
