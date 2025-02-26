import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-blue-950 text-white space-y-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container flex flex-col items-center justify-center gap-6 text-center"
        >
          <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#"
              className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium border-2 border-solid"
            >
              ✨<div className="mx-2 h-4" orientation="vertical" />Beta Release
            </motion.a>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-semibold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]"
          >
            
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-900">
              Selamat datang di website
              <br />
              PT. Muara Toba Persada
            </span>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-[750px] text-center text-lg text-muted-foreground md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-800"
          >
            Kami adalah solusi terbaik penanganan kredit macet nasabah yang
            bekerja dengan komunikasi dua arah yang berorientasi pada hasil dan
            angka yang memuaskan untuk kepercayaan mitra kami.
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
