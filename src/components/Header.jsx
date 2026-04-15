import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="header" className="">
      <header className=" fixed top-8 w-[90%] max-w-6xl z-50 left-1/2 -translate-x-1/2 rounded md:rounded-full pl-3 pr-3 md:px-6 py-2 flex justify-between items-center bg-white/10 backdrop-blur-sm shadow-2xl">

        <h1 className="name text-lg sm:text-2xl text-white ">
          <span className="text-orange-600">Yogesh </span>Sabbani...
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:block cursor-pointer">
          <ul className="flex gap-6 text-lg">
            <a href="#hero"><li className="text-white/80 hover:text-white">Home</li></a>
            <a href="#about"><li className="text-white/80 hover:text-white">About</li></a>
            <a href="#skills"><li className="text-white/80 hover:text-white">Skills</li></a>
            <a href="#customslider"><li className="text-white/80 hover:text-white">Services</li></a>
            <a href="#footer"><li className="text-white/80 hover:text-white">Contact</li></a>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-17 left-0 w-full cursor-pointer  bg-gray-800 flex flex-col items-center py-5 gap-4 lg:hidden">
            <a href="#hero"><span className="text-white/80 hover:text-white">Home</span></a>
            <a href="#about"><span className="text-white/80 hover:text-white">About</span></a>
            <a href="#skills"><span className="text-white/80 hover:text-white">Skills</span></a>
           <a href="#footer"><span className="text-white/80 hover:text-white">Contact</span></a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;