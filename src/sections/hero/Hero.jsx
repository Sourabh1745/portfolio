import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-16">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;