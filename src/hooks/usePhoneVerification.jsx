import React, { useState } from 'react';

const usePhoneVerification = () => {
     const verification = (phoneForSubmit)=>{
        console.log(phoneForSubmit)
        const phoneRegex = /^(?:\+?88)?01[0-9]-?[0-9]{3}-?[0-9]{5}$/;
        if (phoneRegex.test(phoneForSubmit)) {
            // console.log(phoneForSubmit); 
            console.log("Logging the mobileNumber")
            return true
        }
    
         else {
            return false
         }
   
    
    }
    return {  verification, }
};

export default usePhoneVerification;