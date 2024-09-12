import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] gap-14 my-10 mt-42 text-gray-700'>
       
      <div className=''>
        <img src={assets.logo} className='mb-5 w-32' alt=''/>
        <p className='text-sm'>Forever.com - Your One Stop Shop for Quality Gear</p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600 list-none'></ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </div>

      <div>
        <p className='text-xl font-medium'>GET IN TOUCH</p>
      </div>

    </div>
  )
}

export default Footer
