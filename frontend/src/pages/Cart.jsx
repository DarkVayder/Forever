import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Title from '../components/Title';
const Cart = () => {
  const { cartItems, removeFromCart, products } = useContext(ShopContext);
  const navigate = useNavigate();

  // Check if cartItems is empty
  if (!cartItems || Object.keys(cartItems).length === 0) {
    return <div className="container mx-auto py-8 text-center">Your cart is empty!</div>;
  }

  const handleRemoveFromCart = (itemId, size) => {
    removeFromCart(itemId, size);
    const product = products.find((p) => p._id === itemId);
    if (product) {
      toast.error(`${product.name} (Size: ${size}) has been removed from the cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />     </div>
      
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {Object.keys(cartItems).map((itemId) => (
          Object.keys(cartItems[itemId]).map((size) => {
            const product = products.find((p) => p._id === itemId);
            const quantity = cartItems[itemId][size];
            const totalPrice = product ? product.price * quantity : 0;
            
            return product && (
              <div key={`${itemId}-${size}`} className="flex items-center justify-between border p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-4">
                  <img src={product.image[0]} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">Size: {size}</p>
                    <p className="text-gray-600">Quantity: {quantity}</p>
                    <p className="text-gray-600">${totalPrice.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemoveFromCart(itemId, size)} 
                  className="flex items-center text-red-500 hover:text-red-700"
                >
                  <FaTrash className="mr-2" /> Remove
                </button>
              </div>
            );
          })
        ))}
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default Cart;