import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold">Ready to Grow Your Business?</h2>
        <p className="text-lg mt-4">
          Contact us today and let's build something amazing together!
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-yellow-400 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition"
        >
          Get in Touch
        </a>
      </div>
    </motion.section>
  );
};

export default CTASection;
