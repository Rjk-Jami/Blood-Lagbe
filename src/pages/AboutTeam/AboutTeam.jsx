import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavLogo from '../../assets/svg/logoWithTextWeb.svg';

// import './AboutUs.css';

import logo from '../../assets/svg/miniLogo.svg'
import Swiper from '../../component/SwiperAbout/SwiperAbout';
import SwiperAbout from '../../component/SwiperAbout/SwiperAbout';
import { FaXmark } from "react-icons/fa6";

const AboutTeam = () => {


   return (
      <>
         {/* header for lg to - 2xl */}
         {/* <div className="relative z-20 hidden lg:block containerNew mx-auto 2xl:mt-[3rem] lg:mt-[0]]  md:mt-[3.563rem]">
            <div className="flex items-center justify-between -mt-3.5">
               <div className="">
                  <NavLink to={'/'}>
                     <img className="2xl:w-[13.125rem] lg:w-[9.375rem] md:w-[8rem] md:h-[4.346rem] lg:h-[] " src={NavLogo} alt="" />
                  </NavLink>
               </div>
               <div className="">
                  <p className="banglaBold 2xl:text-[4rem] lg:text-[2.5rem] text-white relative z-20">
                     আমাদের টীম
                  </p>
               </div>
            </div>
         </div> */}
         {/* header for md*/}
         <div className="hidden md:flex lg:hidden mt-[4.188rem] justify-center mb-[3.5rem] z-40">
            <img className='w-[5.875rem] h-[8.204rem]' src={logo} alt="" />
         </div>

         {/* carousel from lg*/}
         <div className="hidden lg:flex md:items-baseline lg:items-center justify-center relative z-20 2xl:h-[80vh] xl:h-[80vh] lg:h-[75vh] md:h-[75vh]">
            <div className="absolute bg-black bg-opacity-25 2xl:h-[55vh] xl:h-[60vh]  lg:h-[70vh] md:h-[60vh]  w-[70%] rounded-[50px] -z-10">
              
            </div>
            
            
            <SwiperAbout></SwiperAbout>
         </div>
         <div className="hidden lg:block text-white fixed lg:bottom-[1rem] 2xl:bottom-[4.813rem] 2xl:right-44 xl:bottom-[4.813rem] xl:right-[5.8rem] lg:right-[4.8rem] banglaReg text-right text-xs">
            <p className='banglaBold'>আরও দেখুন...</p>
         </div>
         {/* carousel from md*/}
         <div className="bg-black bg-opacity-25 hidden md:block lg:hidden h-[60vh]  w-[70%] rounded-[50px] mx-auto   justify-center relative z-20 backdrop-blur-3xl " >

         <div className=" pt-9  w-[80%] mx-auto z-10 flex justify-between ">
            <div className="hidden md:block lg:hidden relative z-30">
                  <svg className='text-white ' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="text-white w-7 h-7" viewBox="0 0 16 16">
                     <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                  </svg>

               </div>
               <div className="hidden md:block lg:hidden ">
                  <FaXmark className='w-7 h-7 text-white '></FaXmark>
                  

               </div>
            </div>
            <div className="">
            <div className="m:pt-6 md:pb-[2rem] m:pb-[4.875rem]">
            <p className="banglaBold text-center text-[3rem]  text-white ">
                     আমাদের টীম
                  </p>
                  <div className='mt-5 h-[5px] mx-auto w-3/5 bg-white'></div>
            </div>
           
              <div className="-ps-3">
              <SwiperAbout></SwiperAbout>
              </div>
              <div className="flex items-center justify-center mt-4 m:mt-16 ">
               <button className='banglaBold text-sm px-3 m:px-7 py-3 text-white bg-black bg-opacity-5 rounded-full'>আরও দেখুন</button>
              </div>
            </div>

            
            

         </div>
         <div className="flex justify-center  ">
            <div className="hidden md:block lg:hidden text-white fixed bottom-[7rem]  banglaReg text-center text-xs">
                <p className=''><span className='banglaBold'>&copy;ব্লাড লাগবে ২০২৪</span>, সর্বস্বত্ব সংরক্ষিত<br></br>ব্লাড লাগবে, বাংলাদেশ </p>
            </div>
            </div>

      </>
   );
};

export default AboutTeam;
