import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/beckdg" },
  { icon: <FaLinkedin />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center text-[#8892b0]">
        <div className="flex justify-center items-center space-x-6 mb-4 md:hidden">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-2xl hover:text-[#64ffda] transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm font-mono">Designed & Built by Bekan Deresa</p>
        <div className="fixed bottom-0 left-12 hidden md:flex flex-col items-center space-y-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-2xl hover:text-[#64ffda] transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
          <div className="h-24 w-px bg-[#a8b2d1]"></div>
        </div>
        <div className="fixed bottom-0 right-12 hidden md:flex flex-col items-center space-y-6">
          <a
            href="mailto:bekanderesa27@gmail.com"
            className="text-sm font-mono tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            bekanderesa27@gmail.com
          </a>
          <div className="h-24 w-px bg-[#a8b2d1]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
