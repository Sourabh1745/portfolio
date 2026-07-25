import { FaAnglesDown } from "react-icons/fa6";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-400 text-2xl">
      <FaAnglesDown />
    </div>
  );
};

export default ScrollIndicator;