import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        bg-slate-900/70
        backdrop-blur-xl
        border
        border-slate-800
        rounded-3xl
        p-8
        hover:border-cyan-500
        transition-all
        duration-300"
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-slate-800
              text-slate-300
              border
              border-slate-700
              hover:border-cyan-400
              hover:text-cyan-300
              transition-all
              duration-300
            "
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;