import React from 'react'
import programming from '../assets/programming.png'
import deployment from '../assets/project-launch.png'
import support from '../assets/technical-support.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const CustomSlider = () => {

  const data = [
    {
      image: programming,
      title: 'Website Development',
      para: `I build modern, responsive websites tailored to your business needs.
From landing pages to full- scale web apps, I focus on performance and user experience.
My goal is to create websites that attract users and drive real business growth.`
    },
    {
      image: deployment,
      title: 'Deployment',
      para: `I handle seamless deployment to ensure your website is live, fast, and secure.
From configuring servers to domain setup, everything is optimized for reliability.
Your application will be accessible worldwide with smooth performance and uptime.`
    },
    {
      image: support,
      title: 'Maintenance and Support',
      para: `I provide continuous support to keep your website updated and running smoothly.
                From bug fixes to feature enhancements, I ensure long-term stability and performance.
                    You can focus on your business while I handle the technical side efficiently.`
    }
  ]
  return (
    <section id="customslider" className='autoShow md:pt-[300px] md:-mt-[300px] pt-[260px] -mt-[260px]  px-1 sm:px-8 md:px-16 py-8'>
      <div className=''>
        <h1 className='md:text-center text-center text-2xl sm:text-4xl font-bold mb-2 mt-4 text-orange-600 px-4'>Services</h1>
        <div className='w-[90%] max-w-6xl mx-auto md:w-[99%] lg:w-[90%]'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            {data.map((card, i) => (
              <SwiperSlide key={i} className='flex flex-col justify-center items-center '>
                <div className="min-h-[450px] md:w-[80%]  mx-auto bg-gray-800 rounded-xl px-4 py-4 pb-8 md:px-8 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
                  <div className=' flex justify-center items-center flex-col px-4'> 
                    <img src={card.image} alt="" className=' w-30 h-fit object-contain ' />
                    <h5 className='text-white font-bold/20 pt-2'>{card.title}</h5>
                    <p className='text-gray-400 text-lg pt-2 text-justify'>{card.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section >

  )
}

export default CustomSlider
