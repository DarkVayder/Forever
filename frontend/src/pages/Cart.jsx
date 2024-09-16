import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  // Add a safety check for cartItems
  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  const handleRemoveFromCart = (product) => {
    removeFromCart(product._id);
    toast.error(`${product.name} has been removed from the cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((product) => (
          <div key={product._id} className="flex items-center justify-between border p-4 rounded-md shadow-sm">
            <div className="flex items-center space-x-4">
              <img src={product.image[0]} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
            <button 
              onClick={() => handleRemoveFromCart(product)} 
              className="flex items-center text-red-500 hover:text-red-700"
            >
              <FaTrash className="mr-2" /> Remove
            </button>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
