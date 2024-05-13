import { numBang } from 'bang-utils';
import { toBengaliNumber } from 'bengali-number';
import React, { useContext, useState } from 'react';
import usePhoneVerification from './usePhoneVerification';
import { GlobalVariableContext } from '../component/Provider/GlobalVariable';

const useTakeNumberAsBangla = () => {
    const {phoneForSubmitMobile , setPhoneForSubmitMobile} = useContext(GlobalVariableContext)
    const [phoneForSubmit, setPhoneForSubmit] = useState('');
    const { verification } = usePhoneVerification()
    const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
    const { setValid} = useContext(GlobalVariableContext)

    let inputText = []
    const handleInputChange = (event) => {
        
        const { target, key, keyCode, code } = event;
        // console.log(event)
        // console.log("jami")
   if(event.which !== 229){
    const currentInputs = target.value;
    // console.log(currentInputs)
    // console.log(event.target.value)
    const afterJoinIn = inputText?.join("")
   
    const bangla = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]

    const findBangla = bangla.find(number => number === key); // Check if the pressed key is a Bengali number

   


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
    else if (findBangla) {
        const replace = toEn(key)
        // console.log(replace)
            inputText.push(replace)
            const afterJoin = inputText.join("")
            setPhoneForSubmit(afterJoin)
            // target.value = toBengaliNumber(key);
            target.value = toBengaliNumber(afterJoin);

            event.preventDefault();
        // console.log(key); // If the key is found in the 'bangla' array, log the key
    }
    else if (isNaN((key))) {
        target.value = toBengaliNumber(afterJoinIn);
        event.preventDefault()

    }
    
    
    else{
       
        
    }
    


    console.log(inputText)






   }


    };

    // let userInput = ''

let userInput = ''

    const handleMobileInputKey =(event)=>{
        
        if (event.which === 229) {
            userInput =event.target.value 
            const userInputEn = toEn(userInput);
            const numbersOnly = userInputEn.replace(/\D/g, '');
            
            event.target.value = numBang(numbersOnly)
            console.log(numbersOnly,numbersOnly?.length, "userInput is not nan");
            
            if (numbersOnly.length === 11) {
                // setInputSuccess(true);
                setPhoneForSubmitMobile(numbersOnly)
                console.log("goverif" ,numbersOnly )
                setValid(verification(numbersOnly))
            }
            else {

                setValid(verification(numbersOnly))
            }
          }
            
        }
        
       
     

    return { handleInputChange, inputText, phoneForSubmit, handleMobileInputKey  }
};

export default useTakeNumberAsBangla;