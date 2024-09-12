import React from 'react'
import {assets} from '../assets/assets'

const OurPolicies = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-xs md:text-base text-gray-700  '>
      
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>Easy Exchange Policies</p>
            <p className='text-gray-700'>No hassle, just exchange your old items with our new ones.</p>
        </div>
        
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>1 week return Policy</p>
            <p className='text-gray-700'>We Provide Free Return Policy</p>
        </div>

        
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt=''/>
            <p className='font-semibold'>Our Customer Support</p>
            <p className='text-gray-700'>24/7 Customer Support, Anytime, AnyWhere.</p>
        </div>
        

    </div>
  )
}

export default OurPolicies
