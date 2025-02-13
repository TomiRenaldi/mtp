import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    image: "https://source.unsplash.com/400x300/?ecommerce",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    image: "https://source.unsplash.com/400x300/?banking,app",
    link: "#",
  },
  {
    title: "Business Dashboard",
    image: "https://source.unsplash.com/400x300/?dashboard",
    link: "#",
  },
  {
    title: "Creative Agency Website",
    image: "https://source.unsplash.com/400x300/?agency",
    link: "#",
  },
];

const PortfolioSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">
          Our Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
