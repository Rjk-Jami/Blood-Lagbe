import React, { createContext, useEffect, useState } from 'react';
export const GlobalVariableContext = createContext();
export const GlobalVariable = ({children}) => {
    const [isValid , setValid] = useState(false)
    const [takeNumberForAndroid , setTakeNumberForAndroid] = useState('')
    const [takeNumberForPc, setTakeNumberForPc] = useState('');
    const [height, setHeight] = useState('');
    const [location, setLocation] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
    
        };

        // Call handleResize initially
        handleResize();
        
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
    console.log(height)
    
    return (
       <GlobalVariableContext.Provider value={{isValid, setValid, takeNumberForAndroid , setTakeNumberForAndroid, takeNumberForPc, setTakeNumberForPc, height , location, setLocation}}>

        {children}
       </GlobalVariableContext.Provider>
    );
};

