const SectionHeading = ({ subtitle, title }) => {
  return (
    <div className="mb-16">
      <p className="uppercase tracking-widest text-blue-400 text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;