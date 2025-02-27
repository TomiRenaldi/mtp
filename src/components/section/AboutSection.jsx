import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-10 min-h-screen p-4 bg-blue-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-900">
          Tentang Kami
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-900">
            PT. Muara Toba Persada adalah perusahaan yang berfokus pada jasa
            penagihan kartu kredit dengan sistem Tele Collection maupun Field
            Collector.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
