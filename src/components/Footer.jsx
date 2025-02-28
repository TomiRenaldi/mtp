const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold text-white">Our Company</h2>
            <p className="mt-3 text-gray-400">
              We provide innovative digital solutions to help businesses grow and succeed.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/" className="hover:text-blue-400">About</a></li>
              <li><a href="/" className="hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="mt-3 text-gray-400">Email: contact@company.com</p>
            <p className="text-gray-400">Phone: +123 456 789</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} 2019 - 2025, PT. Muara Toba Persada. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
