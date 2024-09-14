import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import moment from 'moment';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'; 

const Product = () => {
  const { productId } = useParams(); 
  const { products } = useContext(ShopContext); 
  const navigate = useNavigate(); 

  const product = products.find((item) => item._id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-8">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-700 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      {/* Main Product Display */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Product Image */}
        <div className="flex-shrink-0 lg:w-1/2">
          <img
            src={product.image[0]} 
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

          <p className="text-xl font-semibold text-green-600">${product.price}</p>

          {/* Item Number */}
          <div>
            <span className="font-semibold">Item Number:</span> {product._id}
          </div>

          {/* Sizes Available */}
          <div className="mt-4">
            <span className="font-semibold">Available Sizes:</span>
            <div className="flex space-x-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-500 hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Date Added */}
          <div className="mt-4">
            <span className="font-semibold">Date Added:</span> {moment(product.date).format('MMMM Do, YYYY')}
          </div>

          {/* Product Description */}
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Add to Cart Button */}
          <button className="w-full mt-6 px-6 py-3 bg-gray-700 text-white font-semibold rounded-md flex items-center justify-center hover:bg-gray-400 transition">
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
