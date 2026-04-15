import Whatido from '../public/whatido.png';

const About = () => {
  return (
    <section id="about" className="pt-[100px] -mt-[100px] w-[90%] max-w-6xl mx-auto px-1 sm:px-6 md:px-8 py-8  ">
      <div className="border-0 border-white">

        <div className=" flex flex-col md:flex-row md:gap-8 gap-0 items-center">

          <img
            src={Whatido}
            alt=""
            className="w-full  hidden lg:block   md:w-[45%] rounded-2xl"
          />

          <div>
            <h3 className="text-xl md:text-2xl pt-5  text-orange-600 font-bold mb-3">ABOUT</h3>
            <h4 className="text-2xl text-white sm:text-4xl mb-2">
              What <span className="text-orange-600">I Do!</span>
            </h4>

            <p className="text-gray-400 text-lg text-justify ">
              I am a passionate Full Stack Developer who builds fast, responsive, and reliable web applications. I don’t just write code — I focus on creating products that solve real problems and deliver a smooth user experience. I care about clean code, performance, and getting things done efficiently.
            </p>
            <br />
            <p className="text-gray-400 text-lg text-justify">
              I work with the MERN stack and have built complete applications like a video-sharing platform and an e-commerce website. From designing the UI to building secure backend APIs, I handle the full development process. I enjoy tackling challenges and turning complex ideas into simple, working solutions.
            </p>
            <br />
            <p className="text-gray-400 text-lg text-justify">
              I am constantly improving my skills and pushing myself to build better and smarter solutions. I enjoy working in fast-paced, professional environments and contributing to meaningful projects. I’m looking for opportunities where I can take ownership, grow quickly, and make a real impact.
            </p>
        </div>
      </div>
    </div>
    </section >
  );
};

export default About;