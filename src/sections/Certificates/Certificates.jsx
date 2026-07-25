import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "DSA with Java",
    provider: "Infosys",
    year: "2025",
  },

  {
    title: "ReactJs",
    provider: "Infosys",
    year: "2026",
  },

  {
    title: "Project Management",
    provider: "MTF",
    year: "2025",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-28 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Certifications
        </h2>

        <p className="text-center text-slate-400 mt-5 mb-20">
          Courses and certifications that strengthened my technical skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;