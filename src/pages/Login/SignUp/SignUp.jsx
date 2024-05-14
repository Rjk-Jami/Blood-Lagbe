import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalVariableContext } from '../../../component/Provider/GlobalVariable';
import { useParams } from 'react-router-dom';

const SignUp = () => {

    const {location, setLocation} =useContext(GlobalVariableContext)
    const userId = useParams()
    console.log(userId)

    useEffect(() => {
      
        setLocation(true)
  
        
    }, []); 
    return (
        <div className='text-b'>
            {/* header */}
           <div className="">
            <div className="">
                <p>আইডিঃ- #{userId?.id}</p>
            </div>
            <div className="">
                <p>রক্তের গ্রুপ</p>
                
            </div>
           </div>
        </div>
    );
};

export default SignUp;