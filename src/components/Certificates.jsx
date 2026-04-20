import React from 'react'
import internshala from '../public/Internshala_company_logo.png'

function Certificates() {
    return (
        <section id="certifications" className="autoShow md:pt-[210px] md:-mt-[210px] pt-[310px] -mt-[310px] px-1 sm:px-8 md:px-16 py-8">
            <div className=''>
                <h1 className='md:text-center text-center text-2xl sm:text-4xl font-bold mb-2 mt-4 text-orange-600 px-4'>Certifications 🏆</h1>
                <div className=' w-[90%] max-w-6xl mx-auto md:w-[99%] lg:w-[90%] '>
                    <div className="bg-gray-800 rounded-xl px-4 py-4 pb-4 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">

                        {/* Image */}
                        <img
                            src={internshala}
                            alt="Internshala-logo"
                            className="w-40 h-fit mx-auto md:mx-0"
                        />

                        {/* Content */}
                        <div className="text-gray-400 text-sm sm:text-lg leading-relaxed text-justify">

                            {/* Title + Icon */}
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl text-white md:text-white md:font-semibold">
                                    Full Stack Development — Internshala Trainings (Jul 2025 – Jan 2026)

                                </h3>
                            </div>

                            {/* Mobile Text */}
                            <p className="text-md block md:hidden">
                                I learned and built responsive web pages using HTML, CSS, and JavaScript, along with version control using Git and GitHub. I developed interactive applications and strengthened my problem-solving skills through Data Structures and Algorithms in JavaScript. I also built modern web applications using React and gained hands-on experience with backend development using Node.js, Express.js, and MongoDB.
                            </p>

                            {/* Desktop Text */}
                            <p className="hidden md:block">
                                I learned and built responsive web pages using HTML, CSS, and JavaScript, along with version control using Git and GitHub. I developed interactive applications and strengthened my problem-solving skills through Data Structures and Algorithms in JavaScript. I also built modern web applications using React and gained hands-on experience with backend development using Node.js, Express.js, and MongoDB.
                            </p>
                            <div className='flex flex-wrap gap-2 md:flex md:gap-2 md:flex-wrap mt-2'>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>React.js</p>
                                <p className='text-white/70 px-1 py-1 w-fit rounded-xl bg-gray-900 '>MongoDB</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Express.js</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Node.js</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>JWT (JSON Web Tokens)</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>API HTML</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>CSS</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Tailwind CSS</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>JavaScript</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Git</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Git-hub</p>
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>DSA</p>
                                
                                <p className='text-white/70  px-1 py-1 w-fit rounded-xl bg-gray-900 '>Deployement</p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates
