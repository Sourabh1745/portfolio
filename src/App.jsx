import Navbar from "./components/layout/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/common/ScrollProgress";
import ParticlesBackground from "./components/common/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;