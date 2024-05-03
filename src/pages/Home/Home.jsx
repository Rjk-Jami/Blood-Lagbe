import React from 'react';
import logo from '../../assets/svg/LogoSvg.svg'

const Home = () => {
    return (
        <>
            {/* <img className='hidden xl:block fixed xl:right-[300px] 2xl:right-[433px] xl:top-[165px]  2xl:top-[270px] z-20 2xl:w-[21.056rem] xl:w-[20rem] 2xl:h-[29.404rem] xl:h-[23rem]'  src={logo} alt="" />
        <div className='hidden xl:block absolute xl:left-[230px] 2xl:left-[460px] 2xl:top-[305px] xl:top-[175px] text-white z-20'>
            <div className=" ">
                <p className='banglaBold 2xl:text-[2rem] xl:text-[1.5rem]'>আপনার আশেপাশে</p>
                <p className='banglaBold 2xl:text-[4rem] xl:text-[3rem]'>রক্তদাতা খুঁজুন!</p>
                <p className='banglaMed 2xl:text-[1.25rem] xl:text-[1rem] mt-[56px]'>এটি একটি উন্মুক্ত প্ল্যাটফর্ম।<br></br>যেখানে, মানুষ তার প্রয়োজনে রক্তের জন্য অনুরোধ করতে পারে।</p>
                <button className='banglaBold 2xl:w-[16.241rem] xl:w-[15rem] xl:h-[3.5rem] 2xl:h-[4.06rem] flex justify-center items-center  border border-white rounded-full hover:border-none hover:bg-white pt-1 hover:text-[#D01121] 2xl:mt-[76px] xl:mt-[82px]'>শুরু করুন</button>
            </div>

        </div> */}
            <div className="flex lg:items-center justify-center relative z-20 " style={{ height: "calc(100vh - 7.346rem)" }}>
                <div className="text-white flex flex-col lg:flex-row lg:mt-[1rem] xl:mt-[0rem] md:mt-[1rem] m:mt-[4.438rem] h-fit ">
                    <div className=" xl:ms-[1.5rem] lg:ms-[.2rem] md:text-center lg:text-left">
                        <p className='banglaBold 2xl:text-[2rem] md:text-[1.5rem]'>আপনার আশেপাশে</p>
                        <p className='banglaBold 2xl:text-[4rem] md:text-[3rem]'>রক্তদাতা খুঁজুন!</p>
                        <p className='banglaMed 2xl:text-[1.25rem] md:text-[1rem] mt-[56px]'>এটি একটি উন্মুক্ত প্ল্যাটফর্ম।<br></br>যেখানে, মানুষ তার প্রয়োজনে রক্তের জন্য অনুরোধ করতে পারে।</p>
                        <button className='hidden banglaBold 2xl:w-[16.241rem] lg:w-[15rem] lg:h-[3.5rem] 2xl:h-[4.06rem] lg:flex justify-center items-center  border border-white rounded-full hover:border-none hover:bg-white pt-1 hover:text-[#D01121] 2xl:mt-[76px] lg:mt-[82px]'>শুরু করুন</button>
                    </div>
                    <div className=" xl:ms-[18.5rem] lg:ms-[14.1rem] md:mx-auto md:mt-12 m:mt-24 lg:mt-0 lg:mx-0">
                        <img className='2xl:w-[17.25rem] lg:w-[20rem] md:w-[17.25rem] 2xl:h-[24.125rem] lg:h-[23rem] md:h-[24.125rem]' src={logo} alt="" />
                    </div>
                    {/* md */}
                    <div className="md:flex justify-center lg:block">
                        <button className='hidden lg:hidden banglaBold 2xl:w-[16.241rem] md:w-[15rem] md:h-[3.5rem] 2xl:h-[4.06rem] md:flex  justify-center items-center  border border-white rounded-full hover:border-none hover:bg-white pt-1 hover:text-[#D01121] 2xl:mt-[76px]  m:mt-[3.375rem] md:mt-[2.5rem] lg:mt-[82px]'>শুরু করুন</button>
                    </div>
                  
                    

                </div>
            </div>

        </>
    );
};

export default Home;