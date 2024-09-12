import React, { useState } from 'react';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Handle the form submission logic here, like making an API call
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className='text-center px-4 py-8 bg-gray-100 rounded-lg'>
      <p className='text-2xl font-semibold text-gray-700'>Subscribe to our Newsletter</p>
      <p className='text-gray-500 mt-2'>
        Subscribe and get 20% off on your first purchase!
      </p>
      <form onSubmit={onSubmitHandler} className='mt-6 flex items-center justify-center gap-3'>
        <input 
          type="email" 
          className='w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500' 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button 
          type='submit' 
          className='px-6 py-3 bg-primary-500 text-white bg-black font-medium rounded-md hover:bg-primary-600 transition-colors duration-300'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
