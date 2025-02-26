import { motion } from "framer-motion";
import Marquee from "../Marquee";

const ServicesSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <Marquee />
    </div>
  );
};

export default ServicesSection;
