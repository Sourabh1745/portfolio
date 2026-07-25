import { motion } from "framer-motion";

const GlowBlob = ({ className, color }) => {
  return (
    <motion.div
      animate={{
        x: [0, 40, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
      }}
      className={`
        absolute
        w-72
        h-72
        rounded-full
        blur-[120px]
        opacity-25
        ${color}
        ${className}
      `}
    />
  );
};

export default GlowBlob;