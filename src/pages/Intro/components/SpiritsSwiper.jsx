import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const SpiritsSwiper = () => {
  return (
    <Swiper
    slidesPerView={"auto"}
    spaceBetween={0}
    modules={[FreeMode,Autoplay]}
 
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      
    }}
    loop={true}
    speed={14000}
    className="spirits_swiper"
  >
    <SwiperSlide>
      {" "}
      <span className="italic">Sensitive</span>
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <span>Publishing</span>
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <span className="italic">Artistic</span>
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <span>Frontend</span>
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <span className="italic">Contemporary</span>
    </SwiperSlide>
    <SwiperSlide>
      <span>Backend</span>
    </SwiperSlide>
  </Swiper>
  );
};

export default SpiritsSwiper;