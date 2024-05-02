import React from 'react';
import dropright from '../../assets/svg/dropright.png'
import dropleft from '../../assets/svg/dropleft.png'
import Group35 from '../../assets/svg/Group35.png'
import Group35mac from '../../assets/svg/Group35-mac.png'
import Group35tab3 from '../../assets/svg/Vector (1).svg'
const Background = () => {
    return (
        <div className=" ">
        {/* right big 2 */}
        <img className='hidden  2xl:block fixed  z-10 right-0  h-screen' src={Group35} alt="" />
        <img className='hidden lg:block 2xl:hidden fixed  z-10 right-0  h-screen' src={Group35mac} alt="" />
        <img className='hidden md:block lg:hidden absolute w-[1200px]   z-10 right-0  h-screen' src={Group35tab3} alt="" />
        

        {/* right */}
        <img className=' fixed  top-[108px] right-0 h-screen' src={dropright} alt="" />

        {/* left */}
        <img className=' fixed  top-[108px] opacity-25 left-0 h-screen' src={dropleft} alt="" />

      </div>
    );
};

export default Background;