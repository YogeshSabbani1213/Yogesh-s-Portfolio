import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer id="footer" className=" mt-16 bg-gray-900 text-center px-4 py-10">

      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-semibold text-orange-500 mb-6">
        Get In Touch
      </h2>

      {/* Email */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <HiOutlineMail className="text-orange-500 text-2xl" />
        <p className="text-white text-lg sm:text-xl">
          yogeshsabbani67@gmail.com
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6">
        What’s next? Feel free to reach out if you’re looking for a developer, 
        have a question, or just want to connect.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl text-orange-500 mb-8">

        <a href="https://github.com/YogeshSabbani1213" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white hover:scale-110 transition duration-300" />
        </a>

        <a href="https://www.linkedin.com/in/yogesh-sabbani-ba0911282/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white hover:scale-110 transition duration-300" />
        </a>

        <a href="#">
          <FaInstagram className="hover:text-white hover:scale-110 transition duration-300" />
        </a>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-4">

        <p className="text-gray-500 text-sm">
          © 2026 Designed & Built with by{" "}
          <span className="text-orange-500">Yogesh Sabbani</span>
        </p>

      </div>

    </footer>
  );
};

export default Footer;