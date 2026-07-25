import { motion } from "framer-motion";
import Reveal from "../../components/common/Reveal";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaCode />,
      title: "Frontend",
      text: "React, JavaScript, Tailwind CSS",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      text: "Node.js, Express.js",
    },
    {
      icon: <FaLaptopCode />,
      title: "Database",
      text: "MongoDB",
    },
    {
      icon: <FaRocket />,
      title: "Learning",
      text: "Next.js & System Design",
    },
  ];

  return (
    
    <section
      id="about"
      className="py-28 bg-transparent"
    >
      
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          About Me
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
          I'm a passionate Computer Science Engineer and MERN Stack
          Developer who enjoys creating modern, responsive, and
          user-friendly web applications. I love transforming ideas
          into interactive digital experiences and continuously
          learning new technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center"
            >
              <div className="text-5xl text-cyan-400 mb-6 flex justify-center">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>

              <p className="text-slate-400">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;