import React, { useState } from 'react';

const usePhoneVerification = () => {
    const [isValid , setValid]= useState(false)
     const verification = (phoneForSubmit)=>{
        const phoneRegex = /^(?:\+?88)?01[0-9]-?[0-9]{3}-?[0-9]{5}$/;
        if (phoneRegex.test(phoneForSubmit)) {
            // console.log(phoneForSubmit); 
            // Logging the mobileNumber
            setValid(true)
        }
    
         else {
            setValid(false)
         }
    
    
    }
    return { isValid , verification, setValid}
};

export default usePhoneVerification;