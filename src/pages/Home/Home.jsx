import React, { useContext } from 'react';
import logo from '../../assets/svg/LogoSvg.svg'
import logoForSm from '../../assets/svg/logoForSm.svg'
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { GlobalVariableContext } from '../../component/Provider/GlobalVariable';

const Home = () => {
    const {height} = useContext(GlobalVariableContext)


    return (
        <>

            <div className="hidden md:flex lg:items-center justify-center relative z-50 hForLayout" >
                <div className="text-white flex flex-col lg:flex-row lg:mt-[1rem] xl:mt-[0rem] md:mt-[1rem] m:mt-[4.438rem] h-fit ">
                    <div className="hidden md:block  xl:ms-[1.5rem] lg:ms-[.2rem] md:text-center lg:text-left">
                        <p className='banglaBold 2xl:text-[2rem] md:text-[1.5rem]'>আপনার আশেপাশে</p>
                        <p className='banglaBold 2xl:text-[4rem] md:text-[3rem]'>রক্তদাতা খুঁজুন!</p>
                        <p className='banglaMed 2xl:text-[1.25rem] md:text-[1rem] mt-[56px]'>এটি একটি উন্মুক্ত প্ল্যাটফর্ম।<br></br>যেখানে, মানুষ তার প্রয়োজনে রক্তের জন্য অনুরোধ করতে পারে।</p>
                        <NavLink to={'/login'} className='hidden banglaBold 2xl:w-[16.241rem] lg:w-[15rem] lg:h-[3.5rem] 2xl:h-[4.06rem] lg:flex justify-center items-center  border border-white rounded-full hover:border-none hover:bg-white pt-1 hover:text-[#D01121] 2xl:mt-[76px] lg:mt-[82px]'>শুরু করুন</NavLink>
                    </div>
                    <div className=" hidden md:block xl:ms-[18.5rem] lg:ms-[14.1rem] md:mx-auto md:mt-12 m:mt-24 lg:mt-0 lg:mx-0">
                        <img className='2xl:w-[17.25rem] lg:w-[20rem] md:w-[17.25rem] 2xl:h-[24.125rem] lg:h-[23rem] md:h-[24.125rem]' src={logo} alt="" />
                    </div>
                    {/* md */}
                    <div className="md:flex justify-center lg:block">
                        <NavLink to={'/login'} className='hidden lg:hidden banglaBold 2xl:w-[16.241rem] md:w-[15rem] md:h-[3.5rem] 2xl:h-[4.06rem] md:flex  justify-center items-center  border border-white rounded-full hover:border-none hover:bg-white pt-1 hover:text-[#D01121] 2xl:mt-[76px]  m:mt-[3.375rem] md:mt-[2.5rem] lg:mt-[82px]'>শুরু করুন</NavLink>
                    </div>



                </div>
            </div>

            {/* for mobile */}
            <div className={`w-8/12 mx-auto flex items-center md:hidden relative`}  style={{ height: `${height}px` }}>
                <div className="absolute bottom-16  right-0">
                    <NavLink to={'/login'}><button className='btn border-none outline-none btn-circle bg-white'><MdKeyboardArrowRight className=' text-4xl text-login ' /></button></NavLink>
                </div>
                <div className="">
                    <img className='w-fit' src={logoForSm} alt="" />
                    <div className="text-white banglaBold text-xl">
                        <p><span className='italic text-4xl me-2'>ব্লাড লাগবে</span> <span>অ্যাপ এ</span></p>
                        <p>আপনাকে স্বাগতম!</p>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Home;