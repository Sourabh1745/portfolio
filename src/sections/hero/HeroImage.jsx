import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpeg";
import personal from "../../data/personal";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const HeroImage = () => {
  return (
    
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]">
        <TechIcon
  icon={<FaReact />}
  className="-top-5 left-1/2 -translate-x-1/2"
  color="text-cyan-400"
/>

<TechIcon
  icon={<SiJavascript />}
  className="top-14 -right-4"
  color="text-yellow-400"
  delay={0.2}
/>

<TechIcon
  icon={<FaNodeJs />}
  className="bottom-16 -left-6"
  color="text-green-500"
  delay={0.4}
/>

<TechIcon
  icon={<SiMongodb />}
  className="bottom-5 right-4"
  color="text-green-400"
  delay={0.6}
/>

<TechIcon
  icon={<FaGitAlt />}
  className="top-24 -left-8"
  color="text-orange-500"
  delay={0.8}
/>

<TechIcon
  icon={<FaHtml5 />}
  className="bottom-24 -right-8"
  color="text-orange-600"
  delay={1}
/>

<TechIcon
  icon={<FaCss3Alt />}
  className="bottom-32 left-0"
  color="text-blue-500"
  delay={1.2}
/>

<TechIcon
  icon={<SiTailwindcss />}
  className="top-40 right-0"
  color="text-cyan-300"
  delay={1.4}
/>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-30"></div>

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50"
        />

        {/* Outer Border */}
        <div className="absolute inset-2 rounded-full border border-cyan-500/30"></div>

        {/* Image */}
        <motion.img
          src={profile}
          alt="Sourabh Patil"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-4
            w-[calc(100%-2rem)]
            h-[calc(100%-2rem)]
            rounded-full
            object-cover
            object-top
            border-4
            border-slate-800
            shadow-2xl
          "
        />

      </div>
    </motion.div>
  );
};

export default HeroImage;

const TechIcon = ({ icon, className, color, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
      className={`absolute
        ${className}
        w-10
        h-10
        sm:w-12
        sm:h-12
        lg:w-14
        lg:h-14
        text-xl
        sm:text-2xl
        lg:text-3xl
        rounded-2xl
        bg-slate-900/80
        backdrop-blur-xl
        border border-slate-700
        flex
        items-center
        justify-center
        shadow-xl
        ${color}`}
    >
      {icon}
    </motion.div>
  );
};