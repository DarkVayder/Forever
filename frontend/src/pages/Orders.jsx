import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const { products, currency } = useContext(ShopContext); 
  const navigate = useNavigate();  

  return (
    <div className="border-t pt-8 md:pt-16">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      {/* Orders Title */}
      <div className="text-2xl mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders List */}
      {products && products.length > 0 ? (
        <div className="space-y-6">
          {products.slice(1, 4).map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border rounded-lg shadow-md bg-white">
              
              {/* Product Image */}
              <div className="flex items-start gap-4">
                <img className="w-20 h-20 object-cover rounded-lg" src={item.image[0]} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="flex-1 text-left md:text-center">
                <p className="text-base font-semibold">{item.name}</p>
              </div>

              {/* Price, Quantity, and Size */}
              <div className="flex items-center gap-3 text-gray-700">
                <p className="text-lg font-medium">{currency}{item.price}</p>
                <p className="text-sm">Qty: 1</p>
                <p className="text-sm">Size: M</p>
              </div>

              {/* Order Date */}
              <div className="text-sm text-gray-500">
                <p>Date: <span className="text-gray-400">03, May 2024</span></p>
              </div>

              {/* Order Status and Track Button */}
              <div className="flex items-center justify-between gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-sm md:text-base">Ready to Ship</p>
                </div>
                <button className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          You have no orders yet.
        </div>
      )}
    </div>
  );
};

export default Orders;
