import { motion } from "framer-motion";
import Marquee from "../Marquee";

const ServicesSection = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-background py-8 whitespace-nowrap">
      <h2 className="text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-l from-black to-blue-500">
        Mitra Kerja Kami
      </h2>
      <Marquee />
    </div>
  );
};

export default ServicesSection;
