import { useEffect, useState } from "react";

const words = [
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
  "UI/UX Enthusiast",
];

const Typewriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 h-10">
      {words[wordIndex].substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default Typewriter;