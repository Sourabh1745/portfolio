import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import SkillCard from "./SkillCard";

const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      ],
    },

    {
      title: "Programming & Tools",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          My Skills
        </h2>

        <p className="text-center text-slate-400 mt-5 max-w-2xl mx-auto">
          Technologies I use to build responsive, scalable and modern web
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {skillData.map((item, index) => (
            <SkillCard
              key={index}
              title={item.title}
              skills={item.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;