const Button = ({ children, href, primary = true, onClick }) => {
  const classes = primary
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105"
    : "border border-slate-600 hover:border-blue-500 text-white";

  if (href) {
    return (
      <a
        href={href}
        className={`px-6 py-3 rounded-xl transition duration-300 ${classes}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl transition duration-300 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;