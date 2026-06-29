import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center md:text-left"
    >
      <div className="max-w-4xl">
        <h1
          className="text-lg text-[#64ffda] font-mono mb-4 animate-fade-in-down"
          style={{ animationDelay: "100ms" }}
        >
          Hi, my name is
        </h1>
        <h2
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#ccd6f6] tracking-tight animate-fade-in-down"
          style={{ animationDelay: "200ms" }}
        >
          Bekan Deresa.
        </h2>
        <h3
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#8892b0] tracking-tight mt-2 animate-fade-in-down"
          style={{ animationDelay: "300ms" }}
        >
          I am a Certified Software Engineer.
        </h3>
        <p
          className="mt-6 max-w-2xl text-lg text-[#8892b0] animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          I'm a specialized Web & Mobile App Developer based in Bishoftu,
          Ethiopia. I focus on creating high-quality, user-centric digital
          experiences.
        </p>
        <div
          className="mt-8 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded-md font-medium transition-all duration-300 hover:bg-[#64ffda] hover:bg-opacity-10"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
