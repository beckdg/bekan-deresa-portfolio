
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaPython, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiMongodb, SiTailwindcss, SiAmazonwebservices, SiGithubactions, SiTensorflow, SiPytorch, SiOpenai } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Python', icon: <FaPython className="text-blue-500" /> },
  { name: 'Flutter', icon: <SiFlutter className="text-blue-400" /> },
  { name: 'Dart', icon: <SiDart className="text-teal-400" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  { name: 'AWS', icon: <SiAmazonwebservices className="text-orange-400" /> },
  { name: 'GitHub Actions', icon: <SiGithubactions className="text-gray-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-red-500" /> },
  { name: 'LLM Fine-tuning', icon: <SiOpenai className="text-green-400" /> },
  { name: 'AI Agents', icon: <SiOpenai className="text-purple-400" /> },
  { name: 'Generative AI', icon: <SiOpenai className="text-teal-400" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-300" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#ccd6f6] flex items-center justify-center gap-4">
        <span className="text-[#64ffda] font-mono">02.</span> My Skills
        <span className="h-px w-24 bg-[#233554] hidden md:block"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="glass-morphism rounded-lg p-6 flex flex-col items-center justify-center space-y-3 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#64ffda]/10"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="font-medium text-sm text-[#ccd6f6]">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
