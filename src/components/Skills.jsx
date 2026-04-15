import React from "../public/React.png";
import nodejs from "../public/Node.js.png"
import expressjs from "../public/Express.png"
import mongoDB from "../public/MongoDB.png"
import Html from "../public/HTML5.png"
import css from "../public/CSS3.png"
import js from "../public/JavaScript.png"
import git from "../public/Git.png"
import github from "../public/GitHub.png"
import chatgpt from "../public/ChatGPT logo design with green emblem.png"
import postman from "../public/Postman.png"
import DSA from "../public/Data Structures and Algorithms logo.png"
import tailwind from "../public/Tailwind CSS.png"

const Skills = () => {
  return (
    <section id="skills" className="  pt-[100px] -mt-[100px] px-1 sm:px-8 md:px-16 py-8">
        <h3 className="border-0 border-white md:text-center text-center text-2xl text-white sm:text-4xl font-bold mb-2">
          My <span className="text-orange-600">Skills</span>
        </h3>
      <div className="border-0 border-white bg-gray-800 px-4 py-4 pb-4 rounded-xl w-[90%] max-w-6xl mx-auto
      md:w-[99%] lg:w-[90%] ">


        <div className="grid grid-cols-3 gap-6 md:grid md:grid-cols-6 md:gap-8  md:pb-7 pb-4 ">
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={React} alt="" className="hover:scale-120 transition-transform duration-200  w-14 h-fit md:w-20 md:h-fit " />
            <p className="text-white">React</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={nodejs} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit "/>
            <p className="text-white">nodejs</p>
          </div>
          <div className=" flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={expressjs} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">expressjs</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={mongoDB} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">mongoDB</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={Html} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">Html</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={css} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">css</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={js} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit" />
            <p className="text-white">js</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={git} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">git</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={github} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">github</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={chatgpt} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">chatgpt</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={postman} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit"/>
            <p className="text-white">postman</p>
          </div>
          <div className="flex justify-center items-center flex-col md:flex md:justify-center md:items-center md:flex-col ">
            <img src={tailwind} alt="" className="hover:scale-120 transition-transform duration-200 w-14 h-fit md:w-20 md:h-fit" />
            <p className="text-white">tailwind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;