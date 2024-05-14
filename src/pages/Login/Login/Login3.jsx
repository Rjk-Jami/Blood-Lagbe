import { toBengaliNumber } from 'bengali-number';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import usePhoneVerification from '../../../hooks/usePhoneVerification';
import useTakeNumberAsBangla from '../../../hooks/useTakeNumberAsBangla';
import { numBang } from 'bang-utils';
import { GlobalVariableContext } from '../../../component/Provider/GlobalVariable';
const Login3 = () => {
    
    
    const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
    const {isValid, setValid , takeNumberForAndroid , takeNumberForPc , location, setLocation} = useContext(GlobalVariableContext)


    const navigate = useNavigate()
    const inputs = useRef([]);
    const {  verification } = usePhoneVerification()
   
    // const { takeNumberForPc } = useTakeNumberAsBangla()
    const { handleInputChange , handleMobileInputKey } = useTakeNumberAsBangla()
    useEffect(() => {
        const phoneInput = document.getElementById("phone");
        if (phoneInput) {
            phoneInput.addEventListener('keydown', handleInputChange);
        }
        setValid(false)
        setLocation(false)
        return () => {
            if (phoneInput) {
                phoneInput.removeEventListener('keydown', handleInputChange);
            }
        };
    }, []);
    const handleKey = (event) => {
        let concatenatedValue = takeNumberForPc;
// console.log(concatenatedValue)
// console.log("object")
        // const inputCode = toEn(concatenatedValue)
        const inputCode = concatenatedValue
        // console.log(inputCode, "concatenatedValue")
       
        if(event.which !== 229){
            if (inputCode.length === 11  ) {
                // setInputSuccess(true);
                console.log("pc valid")
                setValid(verification(takeNumberForPc))
            }
            else {
                setValid(verification(takeNumberForPc))
            }
        }


    };
    
    
   
    // let userInput = ''
    // const handleMobileInputKey =(event)=>{
    //    if(event.which === 229){
        
    //     userInput = event.target.value;
    //     const userInputEn = toEn(userInput)
    //     const numbersOnly = userInputEn.replace(/\D/g, '');
    //      if(!isNaN(numbersOnly)){
    //         event.target.value = numBang(numbersOnly)
    //         console.log(numbersOnly,"userInput is not nan") 
    //     }
    //     else{
    //         event.target.value = numBang(numbersOnly)
    //     }  
    //    }
         
    // }

    const handleSubmit = (event) => {
       console.log(event)

        if (isValid && takeNumberForPc) {
            console.log(takeNumberForPc); // Logging the mobileNumber
            navigate(`/login/verify/${takeNumberForPc}`)
        }
        else if(isValid && takeNumberForAndroid){
            console.log(takeNumberForAndroid); // Logging the mobileNumber
            navigate(`/login/verify/${takeNumberForAndroid}`)
        }

        event.preventDefault()
    }

    return (
        <div className=' h-[18rem] md:h-full flex  items-center'>
            {/* w-[18.549rem] */}
            <div className=" h-[75%] w-[82%]  mx-auto ">

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

                                {/* <input placeholder='০১৭১২-৩৪৫৬৭৮' id='phone' autoComplete="off" onPaste={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()} ref={inputs} className=" bg-transparent hidden  text-xl focus:outline-none h-10 w-full  text-b text-center form-control rounded" type="text" maxLength="11"  onKeyUp={(event) => { handleKey(event) ;
                                handleMobileInputKey(event)}} onChange={handleMobileInputChange} 
       /> */}
      {/* hidden md:block */}
                                <input placeholder='০১৭১২-৩৪৫৬৭৮' id='phone' autoComplete="off" onPaste={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()}  className=" bg-transparent  text-xl focus:outline-none h-10 w-full  text-b text-center form-control rounded" type="text" maxLength="11"  onKeyUp={(event) => { handleKey(event) ;
                                handleMobileInputKey(event)}} />
                            </div>

                            <div className="w-fit">
                                {
                                    isValid && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(74 222 128)" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>


                                }
                                {
                                    !isValid && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(220 252 231)" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>


                                }

                            </div>

                        </div>
                        <div className="w-full h-[1px] bg-login">

                        </div>
                    </div>
                    <div className="flex ">
                        <div className=' w-[80%] mx-auto  h-[51px]'><button type='submit' disabled={!isValid} className={isValid ? `bg-[#E7152A]  w-full h-full md:h-16 rounded-full outline-none border-none banglaBold text-md` : ` w-full h-full  bg-[#B70D1A] md:h-16 rounded-full outline-none border-none banglaBold text-md`}>ওটিপি পাঠান</button></div>
                       
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Login3;