import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Verify = () => {
    const [inputSuccess, setInputSuccess] = useState(false);
    const [phone, setPhone] = useState('');
    const code = '8888'
    const id = "0001"
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
        if (inputValue.length === 4 && (code === inputValue)) {
           
            setInputSuccess(true)
        }
        else {
            setInputSuccess(false)
        }
    };
    console.log(inputSuccess)
    return (
        <div className='h-full flex items-center'>
            {/* w-[18.549rem] */}
            <div className=" h-[80%] w-[80%]  mx-auto ">

                <form className='flex flex-col justify-between h-full' onSubmit={handleSubmit(onSubmit)}>
                    <div className="banglaBold text-2xl text-login">
                        <p className='text-center'>ওটিপি</p>
                        <div className="w-36 h-[2px] bg-login mx-auto mt-2"></div>
                    </div>
                    <div className="">
                        <p className='banglaSemi text-login text-sm'>ভেরিফাই করুন</p>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-fit">
                            <p className='banglaSemi text-b text-xs '>আপনার মোবাইলে মেসেজে আসা ৪ সংখ্যার<br></br>কোডটি এখানে লিখুন </p>
                            </div>
                            <div className="w-fit ">
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

                        <div className="flex flex-row items-center justify-center text-center mt-2">
                            
                            <div className="text-b flex items-center">
                                <div className="relative h-fit w-fit">
                                <input
                                        autoComplete="off"
                                        placeholder='৪ সংখ্যার কোড'
                                        className='banglaBold p-1 w-44 text-xl focus:outline-none text-center'
                                        type="text"
                                        
                                        onKeyUp={handleKey}
                                        {...register('code', {
                                            required: true,
                                            
                                        })}
                                    />

                                </div>


                            </div>

                        </div>
                        <div className="w-[18.549rem] h-[1px] bg-login">

                        </div>
                        {/* onClick={} */}
                        <p className='banglaSemi text-login text-center mt-2 text-xs '>পুনরায় ওটিপি পাঠান</p>
                    </div>
                    <div className="flex ">
                        <NavLink to={`/login/signUp/${id}`} className=' w-[90%] mx-auto'><button disabled={!inputSuccess} className={inputSuccess ? `bg-[#E7152A]  w-full h-16 rounded-full outline-none border-none banglaBold text-md` : ` w-full   bg-[#B70D1A] h-16 rounded-full outline-none border-none banglaBold text-md`}>শুরু করুন</button></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Verify;