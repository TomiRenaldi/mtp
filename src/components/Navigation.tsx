import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-8" src="src/assets/react.svg" alt="Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Beranda</Link>
                <Link to="/About" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Tentang</Link>
                <Link to="/OurPartners" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Mitra</Link>
                <Link to="/Leader" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Leader</Link>
                <Link to="/ContactUs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Hubungi</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
