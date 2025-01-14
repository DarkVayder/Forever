import React, { useState } from "react";
import axios from 'axios';
import {backendUrl} from '../App'
import { toast } from "react-toastify";
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try{
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
      if (response.data.success) {
        setToken(response.data.token)
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="rounded-md w-full px-3 py-2 border border-gray-400 outline-none focus:border-blue-500"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="rounded-md w-full px-3 py-2 border border-gray-400 outline-none focus:border-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
