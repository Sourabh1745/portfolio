import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Sourabh<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-slate-400 mt-2">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}

          <div className="flex gap-6 text-slate-400">

            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              About
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Skills
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Contact
            </Link>

          </div>

          {/* Social */}

          <div className="flex gap-5 text-2xl">

            <a
              href="#"
              className="text-white hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-white hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-cyan-400 transition"
            >
              <FaArrowUp />
            </Link>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

          © {new Date().getFullYear()} Sourabh Patil. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;