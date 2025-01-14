import React from 'react';
import { NavLink } from "react-router-dom";
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <aside className="w-[18%] min-h-screen border-r-2 bg-gray-50">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        {/* Add Items */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l transition-all ${
              isActive ? 'bg-gray-200 text-gray-800' : 'hover:bg-gray-100 text-gray-600'
            }`
          }
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        {/* List Items */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l transition-all ${
              isActive ? 'bg-gray-200 text-gray-800' : 'hover:bg-gray-100 text-gray-600'
            }`
          }
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List Icon" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        {/* Orders */}
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l transition-all ${
              isActive ? 'bg-gray-200 text-gray-800' : 'hover:bg-gray-100 text-gray-600'
            }`
          }
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders Icon" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
