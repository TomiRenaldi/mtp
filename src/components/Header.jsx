import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <span>
          <Link to="/" className="flex items-center space-x-2">
            Home
          </Link>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
