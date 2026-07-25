import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
    >
      <FaAward className="text-5xl text-yellow-400 mb-6" />

      <h3 className="text-2xl font-bold text-white">
        {certificate.title}
      </h3>

      <p className="text-cyan-400 mt-3">
        {certificate.provider}
      </p>

      <p className="text-slate-400 mt-2">
        {certificate.year}
      </p>

      <button
        className="mt-8
        px-5
        py-3
        rounded-xl
        bg-cyan-500
        hover:bg-cyan-600
        text-white
        transition"
      >
        View Certificate
      </button>
    </motion.div>
  );
};

export default CertificateCard;