import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-morphism shadow-lg" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold text-[#64ffda] tracking-wider transition-transform duration-300 hover:scale-105"
        >
          BD
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#64ffda] focus:outline-none"
          >
            {/* Hamburger icon */}
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#0a192f] w-full text-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
