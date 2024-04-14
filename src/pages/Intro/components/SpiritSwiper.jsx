import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const SpiritSwiper = () => {
  return (
    <>
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={0}
      loop={true}
      freeMode={true}
     
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        
      }}
      speed={8000}
      modules={[Autoplay, FreeMode]}
      className="spirits_swiper"
    >
      <SwiperSlide className='adj'>Sensitive</SwiperSlide>
      <SwiperSlide>UI/UX</SwiperSlide>
      <SwiperSlide className='adj'>Artistic</SwiperSlide>
      <SwiperSlide>Frontend</SwiperSlide>
      <SwiperSlide className='adj'>Contemporary</SwiperSlide>
      <SwiperSlide>Backend</SwiperSlide>
   
    </Swiper>
  </>
  );
};

export default SpiritSwiper;