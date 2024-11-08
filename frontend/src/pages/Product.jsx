import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import moment from 'moment';
import { FaArrowLeft, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image?.[0] || 'fallback-image-url');
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (size) {
      addToCart(productData._id, quantity);
      toast.success(`${productData.name} added to cart!`);
    } else {
      toast.error('Please select a size before adding to cart.');
    }
  };

  const handleQuantityChange = (action) => {
    setQuantity((prevQty) => {
      if (action === 'increase' && prevQty < productData.stock) return prevQty + 1;
      if (action === 'decrease' && prevQty > 1) return prevQty - 1;
      return prevQty;
    });
  };

  if (!productData) return <div>Product not found!</div>;

  return (
    <div className="container mx-auto py-8">
      <ToastContainer />

      {/* Back Button */}
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-700 hover:underline font-medium">
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

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
                className={`w-24 h-24 rounded-md cursor-pointer object-cover border ${
                  image === item ? 'border-gray-800' : 'border-gray-300'
                }`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {Array(4).fill().map((_, i) => (
              <img key={i} src={assets.star_icon} alt={`star-${i}`} />
            ))}
            <img src={assets.star_dull_icon} alt="star-dull" />
            <p>(108)</p>
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
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 border rounded-md text-gray-800 hover:bg-gray-500 hover:text-white transition ${
                    size === item ? 'bg-gray-500 text-white' : ''
                  }`}
                >
                  {item}
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
            <span className="px-4 py-2 border">{quantity}</span>
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
            className={`w-full mt-6 px-6 py-3 font-semibold rounded-md flex items-center justify-center transition ${
              size ? 'bg-gray-700 text-white hover:bg-gray-400' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!size}
          >
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Pay on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (108)</p>
        </div>
        <div className="border px-6 py-5 text-sm text-gray-500">
          <p>A platform for seamless online shopping...</p>
          <p>E-commerce websites provide detailed descriptions, images, reviews, and ratings.</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
