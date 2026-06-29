import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollUp}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#64ffda] text-[#0a192f] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#64ffda]/50 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
