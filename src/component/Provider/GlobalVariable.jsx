import React, { createContext, useState } from 'react';
export const GlobalVariableContext = createContext();
export const GlobalVariable = ({children}) => {
    const [isValid , setValid] = useState(false)
    const [phoneForSubmitMobile , setPhoneForSubmitMobile] = useState('')
    
    return (
       <GlobalVariableContext.Provider value={{isValid, setValid, phoneForSubmitMobile , setPhoneForSubmitMobile}}>

        {children}
       </GlobalVariableContext.Provider>
    );
};

