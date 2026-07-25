import EducationCard from "./EducationCard";

const education = [
  {
    degree: "Bachelor of Computer Science Engineering",
    institute: "Sanjeevan Group of Institutes, Panhala",
    duration: "2022 - 2026",
    description:
      "Focused on software development, web technologies, databases, Java, and modern application development.",
  },

  {
    degree: "Higher Secondary (12th)",
    institute: "Walchand Collage, Sangli",
    duration: "2020 - 2022",
    description:
      "Completed Higher Secondary education with Science stream.",
  },

  {
    degree: "Secondary School (10th)",
    institute: "SSC High School",
    duration: "2019 - 2020",
    description:
      "Completed Secondary School education.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-28 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Education
        </h2>

        <p className="text-center text-slate-400 mt-6 mb-20">
          My academic journey and learning path.
        </p>

        {education.map((item, index) => (
          <EducationCard
            key={index}
            edu={item}
            index={index}
          />
        ))}

      </div>
    </section>
  );
};

export default Education;