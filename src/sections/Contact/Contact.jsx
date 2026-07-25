import { motion } from "framer-motion";
import personal from "../../data/personal";
import { FaMapMarkerAlt } from "react-icons/fa";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          Let's Connect
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-2xl mx-auto">
          Have a project in mind or want to discuss an opportunity?
          I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-white">
              Contact Information
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              Feel free to reach out through the form or connect
              with me through my social profiles.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-slate-300">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >
                    {personal.email}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-white text-2xl" />
                <span className="text-slate-300">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >
                    {personal.github.replace("https://", "")}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-400 text-2xl" />
                <span className="text-slate-300">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >
                    {personal.linkedin.replace("https://", "")}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-400 text-2xl" />

                <span className="text-slate-300">
                  {personal.location}
                </span>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-cyan-400 resize-none"
            />

            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                hover:scale-105
                transition
                duration-300
              "
            >
              <FaEnvelope />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;