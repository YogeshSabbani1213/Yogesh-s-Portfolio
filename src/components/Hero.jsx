import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload } from "react-icons/fa";
import profile from '../public/Profile1.jpeg'

const Hero = () => {
  return (
    <section id="hero" className=" min-h-screen  px-4 sm:px-8 md:px-16 pt-5 flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Text */}
      <div className=" md:flex md:justify-center md:items-center md:gap-10 pt-14  ">


        <div className="  md:text-left max-w-xl  mt-2 flex justify-center items-start flex-col  md:flex md:justify-start md:items-start ">
          <h2 className="hello text-md sm:text-2xl md:text-4xl mb-1 md:mb-4  text-white/50">
            <span className="text-white text-2xl sm:text-4xl md:text-5xl">Hello,</span>I'm Yogesh Sabbani
          </h2>
          <h3 className="typing  text-2xl sm:text-3xl md:text-4xl  md:mb-2 text-white/50">
            <span className="text-orange-600">Full Stack </span>Developer 
          </h3>

          <p className="para leading-relaxed tracking-wide text-gray-400 text-sm sm:text-lg mb-3 md:mb-6">
            I am a passionate web developer who creates responsive and user-friendly websites.
          </p>

          <div className="icons flex justify-center md:justify-start gap-4  text-orange-600 text-xl sm:text-2xl">
            <a href="https://github.com/YogeshSabbani1213" target="_blank">
              <FaGithub className="git hover:scale-120 hover:text-white transition-transform " />
            </a>

            <a href="https://www.linkedin.com/in/yogesh-sabbani-ba0911282/" target="_blank">
              <FaLinkedin className="linkedin hover:scale-120 hover:text-white transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com/yogesh_kannaya?igsh=d25kZTF2ODdyczRr" target="_blank">
              <FaInstagram className="instagram hover:scale-120 hover:text-white transition-transform duration-200"/>
            </a>
          </div>

          <div className=" flex mt-3 justify-center items-center white gap-2">
            <a href="/yogesh_sabbani_resume.pdf"
              target="_blank"
              className="zoom rounded-full text-sm sm:text-sm md:text-sm lg:text-lg mt-3 md:mt-3 px-2 md:px-3 py-1  bg-orange-600 text-white   flex justify-center items-center md:w-fit hover:bg-white hover:text-gray-900">
              View CV
            </a>
            <a href="/YogeshSabbani_Resume.pdf"
              download
              className=" zoom rounded-full text-sm sm:text-sm md:text-sm lg:text-lg mt-3 md:mt-3 px-2 md:px-3 py-1 bg-orange-600 text-white   flex justify-center items-center md:w-fit hover:bg-white hover:text-gray-900 ">
              Download-CV <FaDownload />
            </a>
            <a href="#projects"
              className="zoom cursor-pointer rounded-full text-sm sm:text-sm md:text-sm lg:text-lg mt-3 md:mt-3 px-2 md:px-3 py-1 bg-linear-to-r from-black via-slate-900 to-blue-900  text-white flex justify-center items-center md:w-fit hover:bg-black hover:text-white">
              My-Projects
            </a>

          </div>

        </div>

        {/* Image */}
        <div className="mt-4 flex justify-center items-center md:w-100 relative">
          <img
            src={profile}
            alt="profile"
            className="profile rounded-3xl w-55 sm:w-75 md:w-full  shadow-2xl object-cover hover:shadow-[0_0_60px_rgba(255,165,0,0.6)] md:animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;