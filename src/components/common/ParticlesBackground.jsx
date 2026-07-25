import { motion } from "framer-motion";

const particles = Array.from({ length: 30 });

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">

      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

    </div>
  );
};

export default ParticlesBackground;