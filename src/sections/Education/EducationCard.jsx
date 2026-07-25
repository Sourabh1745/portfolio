import { motion } from "framer-motion";

const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative pl-10 pb-12"
    >
      {/* Timeline Line */}
      <div className="absolute left-2 top-0 h-full w-[2px] bg-cyan-500"></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950"></div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-2xl font-semibold text-white">
          {edu.degree}
        </h3>

        <p className="text-cyan-400 mt-2">
          {edu.institute}
        </p>

        <p className="text-slate-400 mt-2">
          {edu.duration}
        </p>

        <p className="text-slate-500 mt-4">
          {edu.description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;