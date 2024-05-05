import React from 'react';
import NavLogo from '../../../assets/svg/logoWithTextWeb.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();

  // Check if location is '/aboutUs', if so, return null to hide the Navbar
  let currentLocation =  false
  let currentLocationForHome =  false
  


  if (location.pathname === '/aboutTeam'){
    currentLocation = true
  }
  else if(location.pathname === '/aboutUs'){
    currentLocation = true
  } 
  else if(location.pathname === '/OptionForHome'){
    currentLocation = true
  } 
  else if(location.pathname === '/'){
    currentLocationForHome = true
  } 
  else {
    currentLocation = false
  }
 
  // 2xl:mx-[15.67rem] lg:mx-[4.75rem] md:mx-[6.813rem] 2xl:mt-[3rem] lg:mt-[2rem]  md:mt-[3.563rem]

  // active navbar korte hobe
  // className={({ isActive }) => isActive ? `${classForSideBarMdActive}` : `${classForSideBarMd}`} 
  //  className="relative z-20 hidden md:block containerNew mx-auto 2xl:mt-[3rem] lg:mt-[2rem]  md:mt-[3.563rem]"
  return (
    <div className= {currentLocationForHome ? " " :"md:relative lg:static w-full" }>
      <div className= {currentLocationForHome ? " " :"md:fixed lg:static w-full z-50" }>
      <div className={ currentLocation ? `relative z-20 hidden lg:block containerNew mx-auto 2xl:mt-[3rem] lg:mt-[2rem]  md:mt-[3.563rem]` : `relative z-20 hidden md:block containerNew mx-auto 2xl:mt-[3rem] lg:mt-[2rem]  md:mt-[3.563rem]`}>
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="">
        <NavLink  to={'/'}><img className='2xl:w-[13.125rem] lg:w-[9.375rem] md:w-[8rem] md:h-[4.346rem] lg:h-[]' src={NavLogo} alt="" /></NavLink>
        </div>
        {/* large screen */}
        <div className="md:hidden lg:flex text-white   text-[14px]  2xl:gap-[4.5rem] lg:gap-16  z-10 cursor-pointer ">
          <NavLink to={'/aboutUs'} className={({ isActive }) => isActive ? ` bg-black banglaBold bg-opacity-25 rounded-3xl w-[8.063rem] h-[2.688rem] flex justify-center items-center pt-[0.1rem] ` : `banglaNav bg-black bg-opacity-5  hover:bg-opacity-25 rounded-3xl w-[8.063rem] h-[2.688rem] flex justify-center items-center pt-[0.1rem] `} >আমাদের সম্পর্কে</NavLink>
          <NavLink to={'/aboutTeam'} className={({ isActive }) => isActive ? ` bg-black banglaBold bg-opacity-25 rounded-3xl w-[7.313rem] h-[2.688rem] flex justify-center items-center pt-[0.1rem]` : `banglaNav bg-black bg-opacity-5  hover:bg-opacity-25 rounded-3xl w-[7.313rem] h-[2.688rem] flex justify-center items-center pt-[0.1rem]`} >আমাদের টীম</NavLink>
          <NavLink to={'/contact'} className={({ isActive }) => isActive ? `banglaBold bg-black bg-opacity-25 rounded-3xl  w-[6.125rem] h-[2.688rem] flex justify-center items-center pt-[0.1rem] ` : `banglaNav bg-black bg-opacity-5  hover:bg-opacity-25 rounded-3xl  w-[6.125rem] h-[2.688rem] flex justify-center items-center pt-[0.1rem] `}  >যোগাযোগ</NavLink>
        </div>
        {/* tab view */}
        <div className="hidden md:block lg:hidden">
       <NavLink to={'/OptionForHome'}> <FaBars  className='text-white text-2xl'/></NavLink>
        </div>
      </div>

    </div>
      </div>
    </div>
  );
};

export default Navbar;