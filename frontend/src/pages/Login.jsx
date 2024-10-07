import { useState } from "react";
import React from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form 
      onSubmit={onSubmitHandler} 
      className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-14 gap-6 bg-white p-6 shadow-md rounded-lg">
      <div className="inline-flex items-center gap-2 mb-4">
        <p className="text-3xl font-semibold">{currentState}</p>
        <hr className="border-none h-[2px] w-8 bg-gray-700" />
      </div>

      {currentState === 'Sign Up' && (
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition duration-300"
          placeholder="Your Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition duration-300"
        placeholder="Your Email"
        required
      />
      
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition duration-300"
        placeholder="Your Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="text-gray-700 cursor-pointer hover:underline">Forgot password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="text-gray-700 cursor-pointer hover:underline">
            Create new account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="text-gray-700 cursor-pointer hover:underline">
            Login Here!
          </p>
        )}
      </div>

      <button 
        type="submit" 
        className="bg-gray-950 text-white font-medium px-8 py-2 mt-4 rounded-lg hover:bg-gray-700 transition duration-300">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
