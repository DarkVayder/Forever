import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Orders'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='./product' element={<Product/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} />
      </Routes>
    </div>
  )
}

export default App