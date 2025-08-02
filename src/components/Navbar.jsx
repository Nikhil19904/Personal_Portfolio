import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition duration-300">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group font-medium ${
                location.pathname === link.path ? "text-yellow-300" : "text-white"
              } transition duration-300`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Clock (Right Side) */}
        <div className="hidden md:block text-yellow-300 font-semibold bg-gradient-to-r from-blue-800 to-blue-700 px-4 py-1 rounded-full shadow-md border border-yellow-400">
          🕒 {time}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Clock in Mobile View */}
          <span className="text-yellow-300 text-sm">{time}</span>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 space-y-3 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 rounded-md font-medium ${
                location.pathname === link.path
                  ? "bg-blue-600 text-yellow-300"
                  : "hover:bg-blue-600 hover:text-yellow-300"
              } transition duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
