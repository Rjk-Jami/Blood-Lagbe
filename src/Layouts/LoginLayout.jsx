import React from 'react';
import Background from '../component/backgroundDesign/Background';
import Copyright from '../component/copyright/Copyright';
import Navbar from '../pages/shared/Navbar/Navbar';
import logo from '../assets/svg/LogoSvg.svg'
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <>
            <div className="overflow-hidden h-screen  bg-gradient-to-b md:from-[#FC1C36] from-[#FD1C36] to-[#9B000B] md:to-[#AA0B17] relative z-0">
                {/* background */}
                <Background></Background>
                <Copyright></Copyright>

                <Navbar></Navbar>
                <div className="flex items-center justify-center relative z-20 hForLayout ">



                    {/* 2xl:w-3/5 lg:w-4/5 */}
                    <div className="text-white flex flex-col containerNew  2xl:px-32 lg:px-16 justify-between lg:flex-row lg:mt-[1rem] xl:mt-[0rem] ] h-fit">
                        <div className=" hidden lg:block  md:text-center lg:text-left">
                            <img className='2xl:w-[17.25rem] lg:w-[20rem]  2xl:h-[24.125rem] lg:h-[23rem]' src={logo} alt="" />
                        </div>

                        <div className="my-auto">
                        
                        <div className='mt-5 h-44 w-[2px] bg-white hidden lg:block'></div>
                        
                        </div>

                        

                        {/*  xl:ms-[18.5rem] lg:ms-[14.1rem] md:mx-auto md:mt-24 lg:mt-0 lg:mx-0 */}
                        {/* h-fit  */}
                        <div className="w-[19rem] mx-auto md:w-[23.246rem]  md:h-[22rem] my-auto bg-white rounded-[26px] md:mx-auto lg:mx-0">
                        <Outlet></Outlet>

                        </div>
                        {/* md */}


                        

                    </div>
                </div>
            </div>
            
        </>
    );
};

export default LoginLayout; 