import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='relative flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt='Logo' />

      {/* Desktop Navigation */}
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

      {/* Right-side icons */}
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='search' />

        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='Profile' />
          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='./cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          className='cursor-pointer w-5 sm:hidden'
          alt='Menu'
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex justify-end p-5'>
          <img
            onClick={() => setVisible(false)}
            src={assets.close_icon} // Close icon for closing sidebar
            className='w-5 cursor-pointer'
            alt='Close'
          />
        </div>
        <ul className='flex flex-col gap-5 text-sm text-gray-700 px-5'>
          <NavLink to='/' className='flex flex-col' onClick={() => setVisible(false)}>
            <p>HOME</p>
          </NavLink>
          <NavLink to='/collection' className='flex flex-col' onClick={() => setVisible(false)}>
            <p>COLLECTIONS</p>
          </NavLink>
          <NavLink to='/about' className='flex flex-col' onClick={() => setVisible(false)}>
            <p>ABOUT</p>
          </NavLink>
          <NavLink to='/contact' className='flex flex-col' onClick={() => setVisible(false)}>
            <p>CONTACT</p>
          </NavLink>
        </ul>
      </div>

      {/* Background overlay when sidebar is open */}
      {visible && <div onClick={() => setVisible(false)} className='fixed inset-0 bg-black opacity-50 z-40'></div>}
    </div>
  );
};

export default Navbar;
