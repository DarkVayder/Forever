import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import moment from 'moment';
import { FaArrowLeft, FaShoppingCart, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart, removeFromCart, cart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    addToCart(productData, quantity);
    toast.success(`${productData.name} added to cart!`);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(productData._id);
    toast.error(`${productData.name} removed from cart!`);
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity((prevQty) => prevQty + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
    }
  };

  if (!productData) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <ToastContainer />
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
          <img src={image} alt={productData.name} className="w-full h-auto rounded-lg shadow-lg object-contain" />
          <div className="flex space-x-4 mt-2">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`thumb-${index}`}
                className={`w-24 h-24 rounded-md cursor-pointer object-cover border ${image === item ? 'border-gray-800' : 'border-gray-300'}`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='w-3 5' />
            <img src={assets.star_icon} alt='w-3 5' />
            <img src={assets.star_icon} alt='w-3 5' />
            <img src={assets.star_icon} alt='w-3 5' />
            <img src={assets.star_dull_icon} alt='w-3 5' />
            <p className='pl-2'>(108)</p>
          </div>
          <p className="text-xl font-semibold text-green-600">${productData.price}</p>

          {/* Item Number */}
          <div>
            <span className="font-semibold">Item Number:</span> {productData._id}
          </div>

          {/* Sizes Available */}
          <div className="mt-4">
            <span className="font-semibold">Available Sizes:</span>
            <div className="flex space-x-4 mt-2">
              {productData.sizes.map((size) => (
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
            <span className="font-semibold">Date Added:</span> {moment(productData.date).format('MMMM Do, YYYY')}
          </div>

          {/* Product Description */}
          <p className="mt-4 text-gray-700">{productData.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button
              onClick={() => handleQuantityChange('decrease')}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-l-md"
            >
              <FaMinus />
            </button>
            <span className="px-4 py-2 border border-gray-300">{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increase')}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-r-md"
            >
              <FaPlus />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full mt-6 px-6 py-3 bg-gray-700 text-white font-semibold rounded-md flex items-center justify-center hover:bg-gray-400 transition"
          >
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>

          {/* Remove from Cart Button */}
          <button
            onClick={handleRemoveFromCart}
            className="w-full mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-md flex items-center justify-center hover:bg-red-400 transition"
          >
            <FaTrash className="mr-2" /> Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
