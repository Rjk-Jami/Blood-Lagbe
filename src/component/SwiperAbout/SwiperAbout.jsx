import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import slider_image_jami from '../../assets/image/jami.png';
import slider_image_leon from '../../assets/image/Leon.png';
import slider_image_shahriar from '../../assets/image/shahriar.png';
import './Style.css'
const SwiperAbout = () => {
 
    return (
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true}}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay={{ delay: 1000 }}
        loop={true}
        initialSlide={1} // Set the initial slide index to the second slide
        onSwiper={(swiper) => {
          swiper.slideTo(1, 0); // Ensure the initial slide is centered
        }}
        
        onInit={(swiper) => {
          swiper.pagination.update(); // Update pagination bullets
        }}
      >
        <SwiperSlide>
        <div className="xl:w-[14.596rem] lg:w-[13.596rem]  h-[17.25rem] mx-auto bg-white md:w-[13rem] md:rounded-[50px] lg:rounded-[72px]">
        
        <img className='ps-[3rem] pt-[3rem] pe-[3rem]' src={slider_image_leon} alt="Leon" />
        <div className=" text-center mt-3">
        <p className='banglaBold text-2xl' >লিয়ন সরকার</p>
        <p className='banglaLight text-xs'>ফাউন্ডার ও ইউ আই ডিজাইনার</p>
        </div>
        
        </div>

          {/* <img src={slider_image_leon} alt="Leon" /> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="xl:w-[14.596rem] lg:w-[13.596rem] h-[17.25rem] mx-auto bg-white md:w-[13rem] md:rounded-[50px] lg:rounded-[72px]">
        
        <img className='ps-[3rem] pt-[3rem] pe-[3rem]' src={slider_image_shahriar} alt="Leon" />
        <div className=" text-center mt-3">
        <p className='banglaBold text-2xl' >শাহরিয়ার হোসেন</p>
        <p className='banglaLight text-xs'>কো-ফাউন্ডার ও  মার্কেটিং লিড</p>
        </div>
        
        </div>
          {/* <img src={slider_image_shahriar} alt="Shahriar" /> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="xl:w-[14.596rem] lg:w-[13.596rem] h-[17.25rem] mx-auto bg-white md:w-[13rem] md:rounded-[50px] lg:rounded-[72px]">
        
        <img className='ps-[3rem] pt-[3rem] pe-[3rem]' src={slider_image_jami} alt="Leon" />
        <div className=" text-center mt-3">
        <p className='banglaBold text-2xl' >জামি খান</p>
        <p className='banglaLight text-xs'>কো-ফাউন্ডার ও ওয়েব ডেভেলপার</p>
        </div>
        
        </div>
          {/* <img src={slider_image_jami} alt="Jami" /> */}
        </SwiperSlide>
        
      </Swiper>
    );
};

export default SwiperAbout;