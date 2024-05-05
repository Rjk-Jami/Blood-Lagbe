import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [inputSuccess, setInputSuccess] = useState(false);
    const [phone, setPhone] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        console.log(data.phone)
        

    }

    const handleKey = (e) => {
        const inputValue = e.target.value;
        setPhone(inputValue)
        // console.log(inputValue)
        if (inputValue.length === 11) {
            setInputSuccess(!inputSuccess)

        }
        else {
            setInputSuccess(false)
        }
    };
    console.log(inputSuccess)

    return (
        <div className='h-full flex items-center'>
            {/* w-[18.549rem] */}
            <div className=" h-[75%] w-[80%]  mx-auto ">

                <form className='flex flex-col justify-between h-full' onSubmit={handleSubmit(onSubmit)}>
                    <div className="banglaBold text-2xl text-login">
                        <p className='text-center'>লগইন</p>
                        <div className="w-36 h-[2px] bg-login mx-auto mt-5"></div>
                    </div>
                    <div className="">
                        <p className='banglaSemi text-login text-sm'>মোবাইল নম্বর</p>
                        <div className="flex flex-row items-center justify-between ">
                            <div className="text-[#1E1E1E] banglaBold text-xl">(+88)</div>
                            <div className="text-b flex items-center">
                                <div className="relative h-fit w-fit">
                                    <input
                                        autoComplete="off"
                                        placeholder='01712345678'
                                        className='banglaBold p-1 w-44 text-xl focus:outline-none'
                                        type="number"
                                        onPaste={(e) => e.preventDefault()}
                                        onDrop={(e) => e.preventDefault()}
                                        onKeyUp={handleKey}
                                        {...register('phone', {
                                            required: true,
                                            minLength: 11,
                                            maxLength: 11,

                                        })}
                                    />

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

export default Login;
