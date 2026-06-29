
import React, { useEffect, useRef } from "react";

const experiences = [
  {
    year: "2024 – Present",
    role: "Full-Stack & AI Developer",
    company: "Freelance / Personal Projects",
    description:
      "Building web and mobile applications with React, Flutter, and Node.js. Developing ERP solutions and AI-powered agents using LLM fine-tuning, RAG pipelines, and generative AI tools.",
  },
  {
    year: "2023 – 2024",
    role: "Mobile App Developer",
    company: "Freelance",
    description:
      "Designed and developed cross-platform mobile apps with Flutter and Dart. Integrated Firebase for auth, real-time DB, and push notifications. Published apps on Play Store.",
  },
  {
    year: "2022 – 2023",
    role: "Web Developer",
    company: "Freelance",
    description:
      "Built responsive web applications using React, TailwindCSS, and Node.js. Delivered custom dashboards, e-commerce sites, and inventory management systems for local businesses.",
  },
  {
    year: "2021 – 2022",
    role: "Junior Developer",
    company: "Freelance",
    description:
      "Started my development journey building static websites and simple web apps. Gained proficiency in HTML, CSS, JavaScript, and Git through hands-on client projects.",
  },
];

const Experience: React.FC = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-16 text-[#ccd6f6] flex items-center justify-center gap-4">
        <span className="text-[#64ffda] font-mono">02.</span> Experience
        <span className="h-px w-24 bg-[#233554] hidden md:block"></span>
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#233554] md:-translate-x-px"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
            className="reveal relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0"
          >
            <div className="hidden md:block md:w-1/2 md:text-right">
              <span className="text-[#64ffda] font-mono text-sm">{exp.year}</span>
            </div>
            <div className="relative flex items-start gap-4 md:w-1/2">
              <div className="absolute left-0 md:left-[-27px] top-1 w-3 h-3 rounded-full bg-[#64ffda] border-2 border-[#0a192f] z-10"></div>
              <div className="ml-8 md:ml-0 glass-morphism rounded-lg p-6 flex-1">
                <span className="text-[#64ffda] font-mono text-sm md:hidden block mb-2">{exp.year}</span>
                <h3 className="text-xl font-bold text-[#ccd6f6]">{exp.role}</h3>
                <p className="text-[#64ffda] text-sm mb-3">{exp.company}</p>
                <p className="text-[#8892b0] text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
