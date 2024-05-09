import { toBengaliNumber } from 'bengali-number';
import React, { useState } from 'react';

const useTakeNumberAsBangla = () => {
    const [phoneForSubmit, setPhoneForSubmit] = useState('');

    const toEn = n => n.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));

    let inputText = []
    const handleInputChange = (event) => {
        const { target, key, keyCode, code } = event;
        // console.log(event)
        const currentInputs = target.value;
        // console.log(currentInputs)

        const afterJoinIn = inputText?.join("")
        target.value = toBengaliNumber(afterJoinIn)
        const bangla = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

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
        


        console.log(inputText)








    };

    return { handleInputChange, inputText, phoneForSubmit }
};

export default useTakeNumberAsBangla;