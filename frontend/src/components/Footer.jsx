import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] gap-14 my-10 px-5 text-gray-700'>
      {/* Logo and Description */}
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt='Forever Logo' />
        <p className='text-sm'>
          Forever.com - Your One Stop Shop for Quality Gear
        </p>
      </div>

      {/* Company Links */}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600 list-none'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About Us</a></li>
          <li><a href='/delivery'>Delivery</a></li>
          <li><a href='/privacy-policy'>Privacy Policy</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li className='cursor-pointer' >+234 000 111 222</li>
          <li><a href='mailto:info@forever.com'>info@forever.com</a></li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className='col-span-full mt-10'>
        <hr className='border-gray-300' />
        <p className='text-center py-5 text-gray-400 text-sm'>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
