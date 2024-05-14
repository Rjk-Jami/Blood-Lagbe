import { numBang } from 'bang-utils';
import { toBengaliNumber } from 'bengali-number';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalVariableContext } from '../../../component/Provider/GlobalVariable';

const Verify2 = () => {
    const {location, setLocation} =useContext(GlobalVariableContext)

    const [inputSuccess, setInputSuccess] = useState(false);
    const code = '3333';
    const id = "0001";
    const inputs = useRef(Array(4).fill(null));
    const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));

    useEffect(() => {
        inputs.current.forEach(input => {
            input.addEventListener('keydown', handleInputChange);
        });
        setLocation(false)
        return () => {
            inputs.current.forEach(input => {
                if (input) {
                    input.removeEventListener('keydown', handleInputChange);
                }
            });
        };
    }, []);
    const handleKey = (event) => {
        if (event.which !== 229) {
            console.log(event)
            let concatenatedValue = '';
            inputs.current.forEach(input => {
                concatenatedValue += input.value;
            });
            const inputCode = toEn(concatenatedValue)
            console.log(inputCode, "concatenatedValue")
            // Check if the concatenated value is a number or a character
            if (inputCode.length === 4 && code === inputCode) {
                setInputSuccess(true);
            } else {
                setInputSuccess(false);
            }
        }

    };

    const handleKeyUp = (event) => {
        console.log(event)
        const currentIndex = inputs.current.indexOf(event.target);
        console.log(event.target.value, "event.target.value")
        console.log(currentIndex , "currentIndex")
        if (event.which === 229) {
            let concatenatedValue = '';
            inputs.current.forEach(input => {
                concatenatedValue += input.value; });
                const inputCode = toEn(concatenatedValue)
            console.log(inputCode) 
            if (inputCode.length === 4 && code === inputCode) {
                setInputSuccess(true);
            } else {
                setInputSuccess(false);
            }   
            let userInput = event.target.value
            const userInputEn = toEn(userInput);
            console.log(userInputEn,"userInputEn")
            const numbersOnly = userInputEn.replace(/\D/g, '');
            console.log(numbersOnly, "numbersOnly")
           
            if(numbersOnly){
                event.target.value = numBang(numbersOnly);
                if (currentIndex !== inputs.current.length - 1) {
                    inputs.current[currentIndex + 1].focus();
                    event.preventDefault();
                }
                
            }
            else{
                event.target.value = '';
                event.preventDefault();
            }
        }

    }

    const handleInputChange = (event) => {
        const { target, key, keyCode, code } = event;
        const currentIndex = inputs.current.indexOf(target);
        const inputCode = toBengaliNumber(target.value);

        // for bangla
        const bangla = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

        const findBangla = bangla.find(number => number === key);


        if (key === "Backspace" || key === "Delete") {
            target.value = '';
            if (currentIndex !== 0) {
                inputs.current[currentIndex - 1].focus();
                event.preventDefault();

            }
        }
        else if (key === "ArrowRight" || key === "") {
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
            if (code === "Space") {
                event.preventDefault();

            }



            else {

                target.value = toBengaliNumber(key);
                if (currentIndex !== inputs.current.length - 1) {
                    inputs.current[currentIndex + 1].focus();
                    event.preventDefault();
                }
            }
        }
        else if (findBangla) {
            target.value = key;
            if (currentIndex !== inputs.current.length - 1) {
                inputs.current[currentIndex + 1].focus();
                event.preventDefault();
            }

        }

        else if (isNaN((key)) && target.value === '') {
            target.value = '';

            event.preventDefault();

        }


    };


    return (
        <div className='h-full flex items-center '>
            <div className="h-[80%] w-[80%]  mx-auto ">
                <form className='flex flex-col justify-between h-full' id="otp-form">
                    <div className="banglaBold text-2xl text-login">
                        <p className='text-center'>ওটিপি</p>
                        <div className="w-32 md:w-36 h-[2px] bg-login mx-auto mt-2"></div>
                    </div>
                    <div className="">
                        <p className='banglaSemi text-login text-sm'>ভেরিফাই করুন</p>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-fit">
                                <p className='banglaSemi text-b text-xs '>আপনার মোবাইলে মেসেজে আসা ৪ সংখ্যার<br></br>কোডটি এখানে লিখুন </p>
                            </div>
                            <div className="w-fit ">
                                {inputSuccess ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(74 222 128)" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 252 231)" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center text-center banglaBold text-xl mt-2">
                            <div id="otp" className="flex flex-row justify-center text-center px-2 text-b ">
                                <input ref={el => inputs.current[0] = el} className="m-2 bg-[#D9D9D9] h-10 w-10 text-center form-control rounded" type="text" maxLength="1" onKeyUp={handleKeyUp} onKeyDown={handleKey} />
                                <input ref={el => inputs.current[1] = el} className="m-2 bg-[#D9D9D9] h-10 w-10 text-center form-control rounded" type="text" maxLength="1" onKeyUp={handleKeyUp} onKeyDown={handleKey} />
                                <input ref={el => inputs.current[2] = el} className="m-2 bg-[#D9D9D9] h-10 w-10 text-center form-control rounded" type="text" maxLength="1" onKeyUp={handleKeyUp} onKeyDown={handleKey} />
                                <input ref={el => inputs.current[3] = el} className="m-2 bg-[#D9D9D9] h-10 w-10 text-center form-control rounded" type="text" maxLength="1" onKeyUp={handleKeyUp} onKeyDown={handleKey} />
                            </div>
                        </div>
                        <div className="w-[18.549rem] h-[1px] bg-login mt-2"></div>
                        <p className='banglaSemi text-login text-center mt-2 text-xs cursor-pointer'>পুনরায় ওটিপি পাঠান</p>
                    </div>
                    <div className="flex">
                        <NavLink to={`/login/signUp/${id}`} className=' w-[90%] mx-auto'>
                            <button disabled={!inputSuccess} className={`w-full h-16 rounded-full outline-none border-none banglaBold text-md ${inputSuccess ? 'bg-[#E7152A]' : 'bg-[#B70D1A] disabled:bg-[#B70D1A]'}`}>
                                শুরু করুন
                            </button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Verify2;
