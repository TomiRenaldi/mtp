import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          About Our Company
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          We are a leading company in providing digital solutions, helping
          businesses grow with innovative strategies and cutting-edge
          technology. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam eligendi at voluptate vero dolorum neque deleniti architecto, a
          corporis nesciunt repellat aspernatur, inventore labore officiis.
          Perferendis esse ab aliquid? Sed.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          Our mission is to deliver high-quality services that drive success,
          efficiency, and digital transformation. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ullam quod harum voluptate corporis.
          Amet pariatur quod incidunt voluptates a facere et ipsam, nam facilis
          unde sapiente consequuntur, modi laboriosam! Aliquid.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
