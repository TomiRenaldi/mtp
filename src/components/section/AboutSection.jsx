import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-blue-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12">About Quinx</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl">
            Our platform combines cutting-edge technology with an intuitive
            interface, allowing you to build sophisticated bots that would
            typically require extensive programming knowledge. With Quinx,
            you're limited only by your imagination. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero, doloremque dolore!
            Necessitatibus, quam? Repudiandae ex, nihil tenetur libero unde
            architecto nemo nisi minus odio sunt, assumenda neque reiciendis
            nostrum tempore?
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
