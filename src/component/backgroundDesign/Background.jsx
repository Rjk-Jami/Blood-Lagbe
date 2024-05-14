import React from 'react';
import dropright from '../../assets/svg/dropright.png'
import dropleft from '../../assets/svg/dropleft.png'
import Group35 from '../../assets/svg/Group35.png'
import Group35mac from '../../assets/svg/Group35-mac.png'
import Group35tab3 from '../../assets/svg/Vector (1).svg'

const Background = () => {
  return (
    <div className=" ">
      {/* right big triangle */}
      <img className='hidden  2xl:block fixed  z-10 right-0  h-screen' src={Group35} alt="" />
      <img className='hidden lg:block 2xl:hidden fixed  z-10 right-0  h-screen' src={Group35mac} alt="" />
      <img className='hidden md:block lg:hidden absolute w-[1200px]   z-10 right-0  h-screen' src={Group35tab3} alt="" />


      {/* right */}
      <img className='hidden  md:block fixed  top-[108px] right-0 h-screen' src={dropright} alt="" />
      {/* sm */}
      <div className="block   md:hidden fixed  -z-10 right-0  -bottom-[109px] ">
        {/* <img className='block   md:hidden fixed   right-0  -bottom-[109px]' src={dropLeftSm} alt="" /> */}
        <svg className='' width="199" height="572" viewBox="0 0 199 572" fill="none" >
      <path d="M199.503 0C200.441 1.43851 201.129 2.43921 201.785 3.47119C239.595 63.1224 277.389 122.774 315.183 182.409C332.705 210.069 350.242 237.714 367.795 265.358C380.862 285.951 389.927 308.169 394.866 332.061C396.82 341.474 397.977 350.996 398.618 360.613C399.243 370.244 399.086 379.829 398.258 389.414C396.164 413.822 389.896 437.119 379.158 459.15C363.871 490.516 342.13 516.472 313.464 536.486C291.097 552.106 266.448 562.442 239.72 567.93C222.745 571.401 205.615 572.652 188.374 571.683C128.573 568.29 73.4759 539.426 37.3074 488.781C21.2551 466.296 10.2826 441.529 4.40559 414.541C0.920033 398.498 -0.439803 382.284 0.122888 365.897C1.27953 331.686 10.5639 299.851 28.023 270.44C33.2122 261.699 38.8392 253.225 44.2785 244.625C67.5989 207.818 90.9193 170.995 114.255 134.188C142.015 90.4072 169.774 46.6265 197.549 2.84575C198.081 2.01704 198.659 1.21961 199.503 0Z" fill="url(#paint0_linear_448_3738)" />
      <defs>
        <linearGradient id="paint0_linear_448_3738" x1="199.5" y1="0" x2="199.5" y2="572" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B000B" />
          <stop offset="1" stopColor="#A2020E" />
        </linearGradient>
      </defs>
    </svg>
      </div>

      {/* left */}
      <img className='hidden  md:block fixed  top-[108px] opacity-25 left-0 h-screen' src={dropleft} alt="" />

    </div>
  );
};

export default Background;