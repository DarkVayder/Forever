import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Text Section */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141] px-6 sm:px-10'>
            <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
              Latest Arrivals
            </h1>
            <div className='flex items-center gap-2'>
              <p className='font-medium text-sm md:text-base'>SHOP</p>
              <p className='w-8 md:w-full h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full sm:w-1/2'>
          <img className='w-full h-auto' src={assets.hero_img} alt='Hero' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
