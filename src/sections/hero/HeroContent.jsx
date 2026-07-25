import { motion } from "framer-motion";
import Typewriter from "../../components/common/Typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../../components/common/Button";
import personal from "../../data/personal";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-7"
    >
      {/* Greeting */}
      <div>
        <span className="inline-block px-5 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm">
          👋 Hello, I'm
        </span>
      </div>

      {/* Name */}
      <div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
          {personal.firstName}
        </h1>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {personal.lastName}
        </h1>
      </div>

      {/* Typewriter */}
      <Typewriter />

      {/* Description */}
      <p className="max-w-xl text-slate-400 text-lg leading-8">
       {personal.subtitle}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        <Button>Hire Me</Button>

        <Button 
        href={personal.resume}
        primary={false}>
          Download Resume
        </Button>
      </div>

      {/* Socials */}
      <div className="flex justify-center lg:justify-start gap-6 pt-4 text-2xl text-slate-400">
        <a href="#">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
        </a>

        <a href="#">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
        </a>

        <a href={`mailto:${personal.email}`}>
          <FaEnvelope className="hover:text-red-400 hover:scale-110 transition-all duration-300" />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;