
import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".reveal");
    sections.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-[#0a192f] min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a192f] via-transparent to-[#0a192f] opacity-50 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12 lg:px-24">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
