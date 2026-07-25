import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "certificates",
  "contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-black tracking-wide">
            <span className="text-white">Sourabh</span>
            <span className="text-cyan-400">.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-cyan-400"
                className="
                  relative
                  cursor-pointer
                  capitalize
                  text-slate-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link}
              </Link>
            </li>
          ))}

        </ul>

        {/* Resume */}
        

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col items-center py-8 gap-8">

            {links.map((link) => (
              <Link
                key={link}
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="capitalize text-lg cursor-pointer hover:text-cyan-400 transition"
              >
                {link}
              </Link>
            ))}

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;