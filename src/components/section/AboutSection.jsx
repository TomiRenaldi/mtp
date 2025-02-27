import { motion } from "framer-motion";
import { Timeline } from "../Timeline";

// Sample event data
const events = [
  {
    id: 1,
    title: "Company Founded",
    date: "January 2018",
    description:
      "Our journey began in a small garage with just three team members and a vision to change the industry.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "First Major Client",
    date: "March 2019",
    description:
      "We landed our first enterprise client, marking a significant milestone in our growth journey.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Office Expansion",
    date: "June 2020",
    description:
      "As our team grew to 25 members, we moved to a larger office space in the heart of downtown.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Product Launch",
    date: "November 2021",
    description:
      "After months of development, we launched our flagship product to critical acclaim in the market.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "International Expansion",
    date: "February 2023",
    description:
      "We opened our first international office in London, expanding our global footprint.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Industry Award",
    date: "October 2024",
    description:
      "Our team was honored with the prestigious Industry Innovation Award for our contributions to the field.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

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

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
        </div>
        <Timeline events={events} />
      </main>
    </section>
  );
};

export default AboutSection;
