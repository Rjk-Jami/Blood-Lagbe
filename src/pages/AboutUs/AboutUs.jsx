import React from 'react';
import { FaXmark } from "react-icons/fa6";
import Copyright from '../../component/copyright/Copyright';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className="md:mt-12 m:mt-16 lg:mt-0  hidden  lg:items-center justify-center relative z-20  md:hidden lg:flex" style={{ height: "calc(100vh - 7.346rem) " }}>
                {/* <div className="md:mt-12 m:mt-16 lg:mt-0  flex  lg:items-center justify-center relative z-20 " style={{ height: "calc(100vh - 7.346rem)" }}> */}
                {/* lg */}
                <div className="2xl:h-[70%] xl:h-[70%] lg:h-[70%]  w-[70%] bg-white rounded-[40px] relative hidden md:hidden lg:block">
                    {/* <div className="2xl:h-[70%] xl:h-[70%] lg:h-[70%] md:h-[80%] w-[70%] md:bg-black md:bg-opacity-25 lg:bg-opacity-100 lg:bg-white rounded-[40px] relative backdrop-blur-3xl"> */}

                    <div className="absolute z-10 bottom-0 right-0 xl:mb-9 xl:me-11 lg:mb-7 lg:me-9">
                        <p className='banglaBold cursor-pointer 2xl:text-xl xl:text-lg lg:text-[14px] '>আরও দেখুন...</p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full ">
                        <div className=" banglaLight 2xl:text-xl xl:text-xl lg:text-[14px] tracking-wider	  flex flex-col text-[#1E1E1E]">
                            <p>সুরক্ষিত স্বাস্থ্য সংক্রান্ত সেবা প্রদান করার জন্য আপনার ব্লাড ডোনেশন অর্গানাইজেশনের একটি বায়ো খুব উপযুক্ত হতে পারে।<br></br>এই বায়োটি সম্প্রতি যেসমস্যার সমাধানে আপনার অর্গানাইজেশন সহায়তা করতে পারে তা সম্পর্কে তথ্য রয়েছে কি না তা<br></br>নির্ধারণ করা হবে।</p>
                            <p>একটি বায়ো লেখার সাধারণ ধারণা দেওয়ার জন্য, নিম্নলিখিত তথ্যগুলি যোগ করা যেতে পারে:</p>
                            <p><ul className='list-decimal list-inside'>
                                <li>সংগঠনের নাম এবং মূল উদ্দেশ্য</li>
                                <li>সংগঠনের ইতিহাস এবং যাত্রা</li>
                                <li>আপনার অর্গানাইজেশনের মূল সেবা বা প্রকল্পগুলি</li>
                                <li>ডোনেশন প্রক্রিয়া এবং নীতি</li>
                                <li>যোগাযোগের তথ্য (ঠিকানা, ইমেল, ফোন নম্বর ইত্যাদি)</li>
                            </ul></p>
                            <p>এই তথ্য প্রদান করা যায় একটি বায়োগ্রাফিতে, আপনার অর্গানাইজেশনের সম্পর্কে সহজবোধ্য, প্রস্তুতপ্রজ্ঞ এবং স্বীকৃত তথ্য<br></br>সরবরাহ করার জন্য।</p>
                            <p>আপনি নিজে বা আপনার অর্গানাইজেশনের জন্য একটি বায়ো লেখার তৈরি করতে না চাইলে, একজন পেশাদার লেখক বা<br></br>কপিরাইটারের সাথে যোগাযোগ করতে পারেন যে আপনাকে এই কাজে সাহায্য করতে সক্ষম হবে।</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className=" mt-20 relative z-20 h-[83vh] w-full hidden md:flex md:items-center justify-center  lg:hidden ">
                {/* md */}
                <div className="h-[100%] w-[70%] relative hidden md:block lg:hidden">
                    <div className="w-full h-[100%] absolute bg-black bg-opacity-25  rounded-[40px] backdrop-blur-3xl -z-10"></div>
                    <div className=" pt-9  w-[80%] mx-auto z-20 flex justify-between ">
                        <div className="hidden md:block lg:hidden relative z-30">
                            <NavLink to={'/OptionForHome'}> <svg className='text-white ' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="text-white w-7 h-7" viewBox="0 0 16 16">
                                <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                            </svg></NavLink>

                        </div>
                        <div className="hidden md:block lg:hidden ">
                            <NavLink to={'/'}> <FaXmark className='w-7 h-7 text-white '></FaXmark></NavLink>


                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div className="">
                            <div className="pt-2 pb-11 hidden md:block lg:hidden">
                                <p className="banglaBold text-center text-2xl  text-white ">
                                    আমাদের সম্পর্কে
                                </p>
                                <div className='mt-5 h-[2px] mx-auto w-3/5 bg-white'></div>
                            </div>
                            <div className=" banglaLight md:text-md m:text-xl tracking-wider	  flex flex-col text-white text-center w-[80%] m:w-[70%] mx-auto">
                                <p>সুরক্ষিত স্বাস্থ্য সংক্রান্ত সেবা প্রদান করার জন্য আপনার ব্লাড ডোনেশন অর্গানাইজেশনের একটি বায়ো খুব উপযুক্ত হতে পারে। </p>
                                <p>এই বায়োটি সম্প্রতি যেসমস্যার সমাধানে আপনার অর্গানাইজেশন সহায়তা করতে পারে তা সম্পর্কে তথ্য রয়েছে কি না তা নির্ধারণ করা হবে।</p>
                                <p>একটি বায়ো লেখার সাধারণ ধারণা দেওয়ার জন্য, নিম্নলিখিত</p>
                                <br></br>
                                <p> তথ্যগুলি যোগ করা যেতে পারে:</p>
                                <br></br>
                                <p><ul className='list-decimal list-inside'>
                                    <li>সংগঠনের নাম এবং মূল উদ্দেশ্য</li>
                                    <li>সংগঠনের ইতিহাস এবং যাত্রা</li>
                                    <li>আপনার অর্গানাইজেশনের মূল সেবা বা প্রকল্পগুলি</li>
                                    <li>ডোনেশন প্রক্রিয়া এবং নীতি</li>
                                    <li>যোগাযোগের তথ্য (ঠিকানা, ইমেল, ফোন নম্বর ইত্যাদি)</li>
                                </ul></p>
                                <br></br>
                                <br></br>
                                <p>এই তথ্য প্রদান করা যায় একটি বায়োগ্রাফিতে, আপনার অর্গানাইজেশনের সম্পর্কে সহজবোধ্য, প্রস্তুতপ্রজ্ঞ এবং স্বীকৃত তথ্য সরবরাহ করার জন্য।</p>
                                <br></br>
                                <br></br>
                                <p>আপনি নিজে বা আপনার অর্গানাইজেশনের জন্য একটি বায়ো লেখার তৈরি করতে না চাইলে, একজন পেশাদার লেখক বা কপিরাইটারের সাথে যোগাযোগ করতে পারেন যে আপনাকে এই কাজে সাহায্য করতে সক্ষম হবে।</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="">
                <div className="flex justify-center items-center ">
                    <div className="hidden md:block lg:hidden text-white fixed md:bottom-8 m:bottom-10    banglaReg text-center text-xs z-30">
                        <p className=''><span className='banglaBold'>&copy;ব্লাড লাগবে ২০২৪</span>, সর্বস্বত্ব সংরক্ষিত<br></br>ব্লাড লাগবে, বাংলাদেশ </p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutUs;