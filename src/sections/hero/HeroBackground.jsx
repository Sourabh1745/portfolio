import { motion } from "framer-motion";
import GlowBlob from "../../components/common/GlowBlob";

const HeroBackground = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Blobs */}
      <GlowBlob
        className="top-10 left-10"
        color="bg-blue-500"
      />

      <GlowBlob
        className="bottom-20 right-20"
        color="bg-purple-500"
      />

      {/* Aurora */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[700px] h-[700px] rounded-full
        bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20
        blur-3xl
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2"
      />
    </>
  );
};

export default HeroBackground;