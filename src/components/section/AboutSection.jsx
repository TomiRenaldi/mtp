import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 min-h-screen p-4 bg-blue-950 text-white"
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-900">
            PT. Muara Toba Persada adalah perusahaan yang berfokus pada jasa
            penagihan berbasis tele collection dalam penagihan kartu kredit
            dengan sistem tele collection maupun field collector. Perusahaan
            kami memiliki 1 gedung 4 lantai milik sendiri yang terletak di Jl.
            Peta Komp. Bumi Kopo Kencana Blok F No. 6 Bandung 40231, Jawa Barat.
            Dalam sistem kerja tele collection PT. Muara Toba Persada di dukung
            sumber daya manusia yang profesional, handal dan terpercaya. PT.
            Muara Toba Persada didirikan di Bandung pada tanggal 12 Desember
            2019 dengan Akte No. 11, beralamat di Jl. Sukaati Raya no. 24
            Bandung 40255 Jawa Barat, oleh beberapa orang yang berlatar belakang
            dan berpengalaman dalam bidang jasa penagihan kredit macet.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
