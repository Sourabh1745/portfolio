import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-2xl mx-auto">
          Some of the projects I've built while learning and working
          with modern web technologies.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;