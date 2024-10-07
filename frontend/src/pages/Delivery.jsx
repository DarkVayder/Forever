import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Title from '../components/Title';

const Delivery = () => {

    const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 px-4">
        <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>
      <div className="text-4xl font-bold mb-6 text-center">
      <Title text1={'Delivery'} text2={'Information'}/>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Shipping & Delivery Policy</h2>
      <p className="text-gray-700 mb-4">
        At 4ever, we strive to deliver your orders in a timely and efficient manner. We offer multiple delivery options, including standard and expedited shipping.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Delivery Times</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Standard Shipping: 5-7 business days</li>
        <li>Expedited Shipping: 2-3 business days</li>
        <li>Overnight Shipping: 1 business day</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
      <p className="text-gray-700 mb-4">
        Shipping costs are calculated at checkout based on the shipping option selected and the destination address. We offer free standard shipping for orders over $100.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
      <p className="text-gray-700 mb-4">
        Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status of your delivery through the carrier's website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
      <p className="text-gray-700 mb-4">
        We currently ship to select countries outside of Nigeria. International shipping rates vary based on the destination and the weight of the package. Delivery times for international orders may vary.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Delivery Issues</h2>
      <p className="text-gray-700 mb-6">
        If you experience any issues with your delivery, such as delays, damaged items, or incorrect orders, please contact our support team at support@4ever.com, and we will assist you as soon as possible.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        For more information about our delivery options, please contact our customer service team at delivery@4ever.com or call us at +234 123 456 789.
      </p>
    </div>
  );
};

export default Delivery;
