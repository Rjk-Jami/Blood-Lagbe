import React from 'react';
import { useLocation } from 'react-router-dom';

const Copyright = () => {
    const location = useLocation();

    // Check if location is '/aboutUs', if so, return null to hide the Navbar
    if (location.pathname === '/aboutTeam') {
      return null;
    }
    if (location.pathname === '/aboutUs') {
      return null;
    }
    if (location.pathname === '/OptionForHome') {
      return null;
    }

    return (
        
            <>
            <div className="hidden md:block lg:block text-white fixed md:bottom-16 m:bottom-[120px] w-full lg:bottom-[1.5rem] 2xl:bottom-[4.313rem] 2xl:right-44 xl:bottom-[4.313rem] xl:right-[5.8rem] lg:right-[4.8rem] banglaReg  text-xs z-20">
                <p className='md:text-center lg:text-right'><span className='banglaBold'>&copy;ব্লাড লাগবে ২০২৪</span>, সর্বস্বত্ব সংরক্ষিত<br></br>ব্লাড লাগবে, বাংলাদেশ </p>
            </div>
            
            </>
        
    );
};

export default Copyright;