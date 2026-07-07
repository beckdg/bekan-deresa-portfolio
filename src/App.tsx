import React from "react";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideRails from "./components/SideRails";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <ScrollProgress />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SideRails />

      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
