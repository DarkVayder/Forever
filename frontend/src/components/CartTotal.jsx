import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const [cartAmount, setCartAmount] = useState(0); 

  // Use useEffect to fetch cart amount if it's async
  useEffect(() => {
    const fetchCartAmount = async () => {
      const amount = await getCartAmount(); 
      setCartAmount(amount);
    };

    fetchCartAmount();
  }, [getCartAmount]);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART TOTAL'} text2={'TOTAL'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {cartAmount}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p className='font-bold'>Total</p>
          <p>{currency} {cartAmount === 0 ? 0 : cartAmount + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
