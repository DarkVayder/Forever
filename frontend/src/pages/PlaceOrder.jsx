import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { FaArrowLeft } from 'react-icons/fa';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <div className="pt-5 sm:pt-14 min-h-[78vh] border-t">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      <div className='flex flex-col sm:flex-row justify-between gap-4'>
        {/* Delivery Information */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3 mt-1'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Surname Name' />
          </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Your Email' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Your Street Address' />
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Your State' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Your City' />
          </div>
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zip-Code' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
          </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone Number' />
        </div>

        {/* Cart Total and Payment Method */}
        <div className='mt-8'>
          <div className='mt-8 min-w-70'>
            <CartTotal />
          </div>

          {/* Payment Method */}
          <div className='mt-8 text-2xl'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
            <div className='flex gap-3 flex-col lg:flex-row'>
              {/* Stripe Payment Method */}
              <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-950' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
              </div>

              {/* Razorpay Payment Method */}
              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-950' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
              </div>

              {/* Cash on Delivery Method */}
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-950' : ''}`}></p>
                <p className='text-gray-400 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>

            <div className='w-full text-end mt-8'>
              <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-2 text-sm'>
                PLACE YOUR ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
