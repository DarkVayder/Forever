import React from 'react';
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3 px-4 sm:px-[4%] bg-gray-100">
      {/* Logo */}
      <img 
        className="w-[max(10%,80px)] sm:w-[max(8%,100px)]" 
        src={assets.logo} 
        alt="Company Logo" 
      />

      {/* Logout Button */}
      <button 
        className="bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-colors"
      >
        Log Out
      </button>
    </nav>
  );
};

export default Navbar;
