import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "../data/portfolio";

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[index];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        index="06."
        title="Kind words"
        subtitle="What clients and teammates say about working with me."
        align="center"
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="card min-h-[16rem] overflow-hidden p-8 sm:p-12">
          <FaQuoteLeft className="mb-6 text-3xl text-accent/40" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg leading-relaxed text-heading sm:text-xl">
                “{t.quote}”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-accent">{t.name}</p>
                <p className="text-sm text-muted">{t.title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
