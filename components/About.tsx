
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#ccd6f6] flex items-center justify-center gap-4">
        <span className="text-[#64ffda] font-mono">01.</span> About Me
        <span className="h-px w-24 bg-[#233554] hidden md:block"></span>
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-lg text-[#8892b0] space-y-4">
          <p>
            I'm Bekan Deresa — a full-stack and mobile developer from Bishoftu, Ethiopia. I build web and mobile apps, ERP systems, and specialize in AI training and intelligent agent development.
          </p>
          <p>
            I love turning complex problems into simple, elegant solutions — whether it's a responsive frontend, a scalable backend, or a smart AI-powered workflow.
          </p>
        </div>
        <div className="md:col-span-2 group relative w-full max-w-sm mx-auto">
          <div className="absolute inset-0 bg-[#64ffda] rounded-md transition-transform duration-300 transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img
            src="/images/about.jpg"
            alt="Bekan Deresa"
            className="relative w-full h-auto rounded-md z-10 filter grayscale transition-all duration-300 group-hover:filter-none"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
