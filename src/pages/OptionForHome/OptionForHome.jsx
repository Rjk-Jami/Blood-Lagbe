import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const OptionForHome = () => {
    return (

        <div className=" relative z-20 h-[100vh] w-full hidden md:flex md:items-center justify-center  lg:hidden ">
            {/* md */}

            <div className="h-[70vh] w-[70%] relative block ">
                <div className="absolute z-30 right-6 -top-14">
                    <NavLink to={'/'}><FaXmark className='w-7 h-10 text-white '></FaXmark></NavLink>



                </div>
                <div className="w-full h-[100%] absolute bg-black bg-opacity-25  rounded-[40px] backdrop-blur-3xl -z-10"></div>



                <div className=" flex flex-col items-center justify-between h-full py-20">

                    <div className=" w-[60%]">
                        <p className="banglaBold text-3xl  text-white text-center">
                            তালিকা
                        </p>
                        <div className='mt-10 h-[1px] mx-auto w-full bg-white'></div>
                    </div>
                    <div className="flex flex-col text-white   text-xl gap-24 z-30 cursor-pointer ">
                        {/* to={'/aboutUs'} */}
                        <NavLink  to={'/aboutUs'}  className={`banglaBold bg-black bg-transparent hover:border-none border hover:text-black   hover:bg-white rounded-full w-52 h-16 flex justify-center items-center pt-[0.1rem] `} >আমাদের সম্পর্কে</NavLink>
                        <NavLink to={'/aboutTeam'} className={`banglaBold bg-black bg-transparent hover:border-none border hover:text-black   hover:bg-white rounded-full w-52 h-16 flex justify-center items-center pt-[0.1rem] `} >আমাদের টীম</NavLink>
                        <NavLink to={'/contact'} className={`banglaBold bg-black bg-transparent hover:border-none border hover:text-black   hover:bg-white rounded-full w-52 h-16 flex justify-center items-center pt-[0.1rem] `}  >যোগাযোগ</NavLink>
                    </div>
                    <div className="w-[60%]">
                        <div className='mb-10 h-[1px] mx-auto  bg-white'></div>
                        <div className="">
                            <div className="flex justify-center items-center ">
                                <div className=" text-white    banglaReg text-center text-xs z-30">
                                    <p className=''><span className='banglaBold'>&copy;ব্লাড লাগবে ২০২৪</span>, সর্বস্বত্ব সংরক্ষিত<br></br>ব্লাড লাগবে, বাংলাদেশ </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </div>

    );
};

export default OptionForHome;