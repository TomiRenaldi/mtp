import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "We build modern and high-performance websites for businesses.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Creating seamless mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and engaging digital experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your business growth with effective digital strategies.",
    icon: "📈",
  },
];

const ServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
