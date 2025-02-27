import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed py-4 top-0 z-50 w-full bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <Link to="/">
          <img
            className="h-10 w-auto"
            src="/assets/logomtp.png"
            alt="Flowers & Saints Logo"
          />
        </Link>
        <div className="space-x-4">
          <Link to="/contact" className="hover:underline bg-clip-text text-transparent bg-blue-200">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
