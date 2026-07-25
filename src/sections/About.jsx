import { motion } from "framer-motion";
import personal from "../../data/personal";
import Button from "../../components/common/Button";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#020617] px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 uppercase tracking-widest mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Get to know me!
          </h2>

          <p className="text-slate-400 leading-8 mb-5">
            I'm a Computer Science Engineer who enjoys creating
            modern, scalable, and user-friendly web applications.
            I love solving real-world problems using React,
            JavaScript, Node.js, Express, and MongoDB.
          </p>

          <p className="text-slate-400 leading-8">
            I'm continuously learning new technologies,
            improving my frontend skills, and building projects
            that make an impact.
          </p>

          <button className="mt-10 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition">
            Read More
          </button>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              icon: <FaUser />,
              title: "Name",
              value: "Sourabh Patil",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              value: "India",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "Sourabhpatil1745@gmail.com",
            },
            {
              icon: <FaBriefcase />,
              title: "Availability",
              value: "Open to Work",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-900/80
                backdrop-blur-xl
                border
                border-slate-700
                rounded-2xl
                p-6
                hover:border-cyan-500
                hover:-translate-y-2
                transition-all
                duration-300"
            >
              <div className="text-blue-400 text-2xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;