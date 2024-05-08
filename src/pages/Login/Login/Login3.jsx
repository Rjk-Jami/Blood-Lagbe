import { toBengaliNumber } from 'bengali-number';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
const Login3 = () => {
    const [inputSuccess, setInputSuccess] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneForSubmit, setPhoneForSubmit] = useState('');
    const navigate = useNavigate()
    const inputs = useRef([]);
    const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
    let inputText = []
    useEffect(() => {
        const phoneInput = document.getElementById("phone");
        if (phoneInput) {
            phoneInput.addEventListener('keydown', handleInputChange);
        }

        return () => {
            if (phoneInput) {
                phoneInput.removeEventListener('keydown', handleInputChange);
            }
        };
    }, []);
    const handleKey = (e) => {

        let concatenatedValue = e.target.value;

        // const inputCode = toEn(concatenatedValue)
        const inputCode = concatenatedValue
        console.log(inputCode, "concatenatedValue")
        // Check if the concatenated value is a number or a character
        if (inputCode.length === 11) {
            setInputSuccess(true);
        } else {
            setInputSuccess(false);
        }
    };


    const handleInputChange = (event) => {
        const { target, key, keyCode, code } = event;
        console.log(event)
        const currentInputs = target.value;
        console.log(currentInputs)

        const afterJoinIn = inputText.join("")
        target.value = toBengaliNumber(afterJoinIn)



        if ((!isNaN(Number(key))) && afterJoinIn.length < 11) {
            // target.value = toBengaliNumber(key);
            if (code === "Space") {
                const afterJoin = inputText.join("")
                target.value = toBengaliNumber(afterJoin);

                event.preventDefault();
            }
            else {
                inputText.push(key)
                const afterJoin = inputText.join("")
                setPhoneForSubmit(afterJoin)
                // target.value = toBengaliNumber(key);
                target.value = toBengaliNumber(afterJoin);

                event.preventDefault();
            }

        }
        else if (key === "Backspace" || key === "Delete") {
            inputText.pop()
            const afterJoin = inputText.join("")
            setPhoneForSubmit(afterJoin)
            // target.value = toBengaliNumber(key);
            target.value = toBengaliNumber(afterJoin);

            event.preventDefault()
        }
        else if (afterJoinIn.length === 11) {
            target.value = toBengaliNumber(afterJoinIn);
            event.preventDefault()

        }
        else if (isNaN((key))) {
            target.value = toBengaliNumber(afterJoinIn);
            event.preventDefault()

        }


        console.log(inputText)








    };
    const handleSubmit = (event) => {
        // Assuming mobileNumber is coming from an input field
        const phoneRegex = /^(?:\+?88)?01[0-9]-?[0-9]{3}-?[0-9]{5}$/;

        if (phoneRegex.test(phoneForSubmit)) {
            console.log(phoneForSubmit); // Logging the mobileNumber
            navigate(`/login/verify/${phoneForSubmit}`)
        }

        event.preventDefault()
    }

    return (
        <div className='h-full flex items-center'>
            {/* w-[18.549rem] */}
            <div className=" h-[75%] w-[80%]  mx-auto ">

                <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full' >
                    <div className="banglaBold text-2xl text-login">
                        <p className='text-center'>লগইন</p>
                        <div className="w-36 h-[2px] bg-login mx-auto mt-5"></div>
                    </div>
                    <div className="">
                        <p className='banglaSemi text-login text-sm'>মোবাইল নম্বর</p>
                        <div className="flex flex-row items-center justify-between ">
                            <div className="text-[#1E1E1E] banglaBold text-xl"><p>&#40;+৮৮&#41;</p></div>

                            <div id="otp" className="flex banglaBold flex-row justify-center text-center text-b  ">
                                <input placeholder='০১৭১২-৩৪৫৬৭৮' id='phone' autoComplete="off" onPaste={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()} ref={inputs} className="  text-xl focus:outline-none h-10 w-full  text-center form-control rounded" type="text" maxLength="11" onKeyDown={handleKey} />

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
                        <div className=' w-[90%] mx-auto'><button type='submit' disabled={!inputSuccess} className={inputSuccess ? `bg-[#E7152A]  w-full h-16 rounded-full outline-none border-none banglaBold text-md` : ` w-full   bg-[#B70D1A] h-16 rounded-full outline-none border-none banglaBold text-md`}>ওটিপি পাঠান</button></div>
                        {/* <NavLink to={`verify/${phone}`} className=' w-[90%] mx-auto'><button type='submit'  disabled={!inputSuccess} className={inputSuccess ? `bg-[#E7152A]  w-full h-16 rounded-full outline-none border-none banglaBold text-md` : ` w-full   bg-[#B70D1A] h-16 rounded-full outline-none border-none banglaBold text-md`}>ওটিপি পাঠান</button></NavLink> */}
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Login3;