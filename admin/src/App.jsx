import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Conditional Rendering for Login */}
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* Navbar */}
          <Navbar />
          <hr />

          {/* Main Content */}
          <div className="flex w-full">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Page Content */}
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
