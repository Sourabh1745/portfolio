import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="h-60 overflow-hidden">
        {project.image && project.image !== "#" ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              Project Preview
            </span>
          </div>
        )}
      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
              project.demo === "#"
                ? "bg-slate-700 cursor-not-allowed pointer-events-none opacity-60"
                : "bg-cyan-500 hover:bg-cyan-600 text-white"
            }`}
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
              project.github === "#"
                ? "border border-slate-700 cursor-not-allowed pointer-events-none opacity-60"
                : "border border-slate-700 hover:border-cyan-500 text-white"
            }`}
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;