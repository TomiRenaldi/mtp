import { motion } from "framer-motion";
import { Timeline } from "../Timeline";

// Sample event data
const events = [
  {
    id: 1,
    title: "Perusahaan di dirikan",
    date: "January 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae natus, adipisci quaerat ea harum! Ipsa id inventore voluptates sint praesentium totam qui, commodi nulla. Sapiente dignissimos suscipit numquam iure?",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Pertama menjadi mitra Bank BUMN",
    date: "March 2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae natus, adipisci quaerat ea harum! Ipsa id inventore voluptates sint praesentium totam qui, commodi nulla. Sapiente dignissimos suscipit numquam iure?.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Peresmian Kantor Utama di Kota Bandung",
    date: "June 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae natus, adipisci quaerat ea harum! Ipsa id inventore voluptates sint praesentium totam qui, commodi nulla. Sapiente dignissimos suscipit numquam iure?.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Agency Terbaik",
    date: "November 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae natus, adipisci quaerat ea harum! Ipsa id inventore voluptates sint praesentium totam qui, commodi nulla. Sapiente dignissimos suscipit numquam iure?.",
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
