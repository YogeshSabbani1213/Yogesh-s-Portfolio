import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Navbar */}
      <div className="flex items-center justify-between px-5 py-3 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">

        {/* Logo */}
        <a href="#hero">
          <h1 className="name text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-orange-500">Yogesh</span>
            <span className="text-white"> Sabbani</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white/70 hover:text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Resume Button */}
          <a
            href="/YogeshSabbani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 hover:scale-105 transition-all duration-300"
          >
            Resume
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-xl p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-5 shadow-xl">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-orange-500 transition duration-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-3 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;