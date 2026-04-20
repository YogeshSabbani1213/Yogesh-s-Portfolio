import React from 'react'
import yt from '../public/youtube.png';
import shoppyglobe from '../public/ShoppyGlobe.png'
import linklogo from '../public/link.png'

const Projects = () => {
    return (
        <section id='projects' className=" pt-[70px] -mt-[70px] px-1 sm:px-8 md:px-16 py-8">
            <h3 className='md:text-center text-center text-2xl sm:text-4xl font-bold mb-2 mt-4 text-orange-600 px-4'>Projects</h3>
            <div className=' w-[90%] max-w-6xl mx-auto md:w-[99%] lg:w-[90%]'>
                <div className=" space-y-4">

                    {/*  YOUTUBE PROJECT  */}
                    <div className="slideflr  autoShow bg-gray-800 rounded-xl px-4 py-4 pb-4 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">

                        {/* Image */}
                        <a
                            href="https://youtube-clone-fawn-three.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src={yt}
                                alt="youtube-logo"
                                className="w-50 md:w-140 h-fit mx-auto md:mx-0 hover:scale-120 transition-transform duration-200"
                            />
                        </a>

                        {/* Content */}
                        <div className="text-gray-400 text-sm sm:text-lg leading-relaxed text-justify">

                            {/* Title + Icon */}
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className=" text-xl text-white md:text-white md:font-semibold">
                                    YouTube Clone – Video Sharing Platform (MERN Stack)
                                </h3>

                                <a
                                    href="https://youtube-clone-fawn-three.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={linklogo}
                                        alt="link"
                                        className="w-12 h-fit md:w-7 md:h-fit hover:scale-110 transition cursor-pointer"
                                    />
                                </a>
                            </div>

                            {/* Mobile Text */}
                            <p className="text-md block md:hidden">
                                I built a scalable video-sharing platform using the MERN stack with features like authentication, channel management, video uploads, and comments, secured with JWT for robust access control. It uses optimized MongoDB schemas and a responsive React UI with Router and Context API to deliver a smooth, efficient user experience.
                            </p>

                            {/* Desktop Text */}
                            <p className="hidden md:block">
                                I built a scalable video-sharing platform using the MERN stack (MongoDB, Express, React, Node). It allows users to create accounts, manage channels, upload videos, and interact through comments. I implemented secure JWT-based authentication and designed efficient MongoDB schemas. The frontend uses React Router and Context API for smooth navigation and state management.
                            </p>

                            <div className='flex flex-wrap gap-2 md:flex md:gap-2 md:flex-wrap mt-2'>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>React.js</p>
                                <p className='text-white/70 px-1 py-1 w-fit rounded-xl bg-gray-900 '>MongoDB</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Express.js</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Node.js</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>JWT (JSON Web Tokens)</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>API Security / Protected Routes</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>RESTful API</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Context API</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>React Router</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>State Management</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Bcryptjs</p>

                            </div>
                        </div>
                    </div>

                    {/*  SHOPPYGLOBE PROJECT  */}
                    <div className=" slidefrl autoShow bg-gray-800 rounded-xl p-4 md:px-8 flex flex-col md:flex-row items-start gap-4 md:gap-6">

                        {/* Image */}
                        <a
                            href="https://shoppy-globe-e-commerce-website.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img
                                src={shoppyglobe}
                                alt="project"
                                className="md:w-120 w-60 h-fit rounded-2xl mx-auto md:mx-0 hover:scale-120 transition-transform duration-200"
                            />
                        </a>

                        {/* Content */}
                        <div className="text-gray-400 text-sm sm:text-lg leading-relaxed text-justify">

                            {/* Title */}
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className=" text-xl text-white md:text-white md:font-semibold">
                                    ShoppyGlobe – E-commerce Application
                                </h3>

                                <a
                                    href="https://shoppy-globe-e-commerce-website.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={linklogo}
                                        alt="link"
                                        className="w-12 h-fit md:w-7 md:h-fit hover:scale-110 transition cursor-pointer"
                                    />
                                </a>
                            </div>

                            {/* Mobile Text */}
                            <p className=" text-md block md:hidden">
                                I developed ShoppyGlobe, an e-commerce web app using React with a scalable component-based architecture. I managed state using Redux, Context API, and custom hooks, and integrated API data for product listings, search, cart, and checkout features. The app includes dynamic routing, reusable components, and a responsive UI with lazy loading and error handling for a smooth user experience.
                            </p>

                            {/* Desktop Text */}
                            <p className="hidden md:block">
                                I developed the ShoppyGlobe e-commerce application using React with a scalable component-based architecture. I implemented features like product listing, search, cart management, and checkout flow. Used Redux, Context API, and React Router while ensuring performance, responsiveness, and proper error handling.
                            </p>
                            <div className='flex flex-wrap gap-2 md:flex md:gap-2 md:flex-wrap mt-2'>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>React.js</p>
                                <p className='text-white/70 px-1 py-1 w-fit rounded-xl bg-gray-900 '>Checkout Flow</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Lazy Loading</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Responsive Design</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>JWT (JSON Web Tokens)</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>API Security / Protected Routes</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Custom Hooks</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Context API</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>React Router</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>State Management</p>

                            </div>                        
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects
