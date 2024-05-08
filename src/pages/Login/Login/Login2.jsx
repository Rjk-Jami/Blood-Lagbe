import { toBengaliNumber } from 'bengali-number';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Login2 = () => {
    const [inputSuccess, setInputSuccess] = useState(false);
    const [phone, setPhone] = useState('');

    const inputs = useRef([]);
    const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));

    useEffect(() => {
        inputs.current.forEach(input => {
            input.addEventListener('keydown', handleInputChange);
        });

        return () => {
            inputs.current.forEach(input => {
                input.removeEventListener('keydown', handleInputChange);
            });
        };
    }, []);
    const handleKey = () => {

        let concatenatedValue = '';
        inputs.current.forEach(input => {
            concatenatedValue += input.value;
        });
        const inputCode = toEn(concatenatedValue)
        console.log(inputCode, "concatenatedValue")
        // Check if the concatenated value is a number or a character
        if (inputCode.length === 11) {
            setInputSuccess(true);
        } else {
            setInputSuccess(false);
        }
    };

    const handleInputChange = (event) => {
        const { target, key, keyCode } = event;
        console.log(event)
        const currentIndex = inputs.current.indexOf(target);
        const inputCode = toBengaliNumber(target.value);

        if (key === "Backspace" || key === "Delete") {
            target.value = '';
            if (currentIndex !== 0) {
                inputs.current[currentIndex - 1].focus();
                event.preventDefault();

            }
        }
        else if (key === "ArrowRight" || key === "Tab") {
            if (currentIndex !== inputs.current.length - 1) {
                inputs.current[currentIndex + 1].focus();
                event.preventDefault();
            }
        } else if (key === "ArrowLeft") {
            if (currentIndex !== 0) {
                inputs.current[currentIndex - 1].focus();
                event.preventDefault();

            }
        } else if (!isNaN(Number(key))) {
            target.value = toBengaliNumber(key);
            if (currentIndex !== inputs.current.length - 1) {
                inputs.current[currentIndex + 1].focus();
                event.preventDefault();
            }
        }
        else if (isNaN((key))) {
            target.value = '';

            event.preventDefault();

        }


    };

    return (
        <div className='h-full flex items-center'>
            {/* w-[18.549rem] */}
            <div className=" h-[75%] w-[80%]  mx-auto ">

                <form className='flex flex-col justify-between h-full' >
                    <div className="banglaBold text-2xl text-login">
                        <p className='text-center'>লগইন</p>
                        <div className="w-36 h-[2px] bg-login mx-auto mt-5"></div>
                    </div>
                    <div className="">
                        <p className='banglaSemi text-login text-sm'>মোবাইল নম্বর</p>
                        <div className="flex flex-row items-center justify-between ">
                            <div className="text-[#1E1E1E] banglaBold text-xl"><p>&#40;+৮৮&#41;</p></div>
                            
                                <div id="otp" className="flex banglaBold flex-row justify-center text-center text-b  ">
                                    <input placeholder='০' ref={el => inputs.current[0] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='১' ref={el => inputs.current[1] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৭' ref={el => inputs.current[2] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='১' ref={el => inputs.current[3] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='২' ref={el => inputs.current[4] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৩' ref={el => inputs.current[5] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৪' ref={el => inputs.current[6] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৫' ref={el => inputs.current[7] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৬' ref={el => inputs.current[8] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৭' ref={el => inputs.current[9] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                    <input placeholder='৮' ref={el => inputs.current[10] = el} className=" placeholder:text-slate-200 text-xl focus:outline-none h-10 w-3  text-center form-control rounded" type="text" maxLength="1" onKeyDown={handleKey} />
                                </div>

                                <div className="w-fit">
                                    {
                                        inputSuccess && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(74 222 128)" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>


                                    }
                                    {
                                        !inputSuccess && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 252 231)" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>


                                    }
                                
                            </div>

                        </div>
                        <div className="w-[18.549rem] h-[1px] bg-login">

                        </div>
                    </div>
                    <div className="flex ">
                        <NavLink to={`verify/${phone}`} className=' w-[90%] mx-auto'><button disabled={!inputSuccess} className={inputSuccess ? `bg-[#E7152A]  w-full h-16 rounded-full outline-none border-none banglaBold text-md` : ` w-full   bg-[#B70D1A] h-16 rounded-full outline-none border-none banglaBold text-md`}>ওটিপি পাঠান</button></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login2;
