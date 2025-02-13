import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-blue-600 text-white py-20 text-center"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Our Company</span>
        </h1>
        <p className="text-lg mb-6">
          We provide the best solutions for your business growth.
        </p>
        <a className="bg-yellow-400 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition">
          Explore Our Services
        </a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
