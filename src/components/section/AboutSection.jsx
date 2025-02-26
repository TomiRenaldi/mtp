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
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-900">Tentang Kami</h2>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-900">
            Kami adalah perusahaan yang berfokus pada jasa penagihan berbasis
            tele collection dalam penagihan kartu kredit dengan sistem tele
            collection maupun field collector. Perusahaan kami memiliki 1 gedung
            4 lantai milik sendiri yang terletak di Jl. Peta Komp. Bumi Kopo
            Kencana Blok F No. 6 Bandung 40231, Jawa Barat. Dalam sistem kerja
            tele collection PT MUARA TOBA PERSADA di dukung sumber daya manusia
            yang profesional, handal dan terpercaya. PT MUARA TOBA PERSADA
            didirikan di Bandung pada tanggal 12 Desember 2019 dengan Akte No.
            11, beralamat di Jl. Sukaati Raya no. 24 Bandung 40255 Jawa Barat,
            oleh beberapa orang yang berlatar belakang dan berpengalaman dalam
            bidang jasa penagihan kredit macet. Juanda JK. Sirait membangun
            perusahaan ini berdasar pada idealismenya untuk mewujudkan PT MUARA
            TOBA PERSADA menjadi perusahaan yang berorientasi pada kepuasan
            pengguna jasa perusahaan dan menjunjung tinggi kejujuran dan
            profesionalisme dalam bekerja. Dengan demikian, PT MUARA TOBA
            PERSADA diharapkan menjadi solusi bagi industri perbankan dalam
            penanganan masalah kredit macet perbankan dewasa ini.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
