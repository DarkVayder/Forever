import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt='Logo' />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTIONS</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300' />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
