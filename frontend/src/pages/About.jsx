import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import { assets } from '../assets/assets';

// Sample customer reviews
const reviews = [
  { id: 1, name: 'John Snow.', review: 'Amazing quality and fast delivery!', rating: 5 },
  { id: 2, name: 'Harry Potter.', review: 'Customer service was top-notch.', rating: 4 },
  { id: 3, name: 'Lincoln Burrows.', review: 'Beautiful packaging and great selection.', rating: 5 },
];

// Fun facts about your store or products
const funFacts = [
  'All our products are eco-friendly.',
  'We ship to over 50 countries worldwide.',
  'Our best-selling product is the Cotton Round Neck Top.',
];

const faqData = [
  { id: 1, question: 'Do you offer international shipping?', answer: 'Yes, we offer worldwide shipping.' },
  { id: 2, question: 'What is your return policy?', answer: 'You can return any item within 30 days of purchase.' },
  { id: 3, question: 'How can I track my order?', answer: 'You will receive a tracking link via email after your purchase.' },
];

const About = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [randomFact, setRandomFact] = useState('');
  const navigate = useNavigate();

  // Rotate fun facts
  useEffect(() => {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setRandomFact(fact);
  }, []);

  // Rotate customer reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-700 hover:underline font-medium transition-all duration-300"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      {/* Title Section */}
      <div className='text-4xl text-center mb-6'>
        <Title text1={'About'} text2={'Us'} />
      </div>

      {/* Brand Story Section */}
      <section className="mb-12 flex flex-col md:flex-row gap-16 items-center text-center md:text-left">
        <img className="w-full md:max-w-[450px] rounded-lg shadow-lg" src={assets.about_img} alt="About Us" />
        <p className="text-lg text-gray-700 max-w-3xl">
          At 4ever, we believe in delivering high-quality, sustainable fashion that makes you look good and feel even better.
          Our journey began in 2015 with a mission to provide stylish yet eco-friendly clothing for modern, conscious consumers.
        </p>
      </section>

      {/* Fun Facts */}
      <section className="mb-12 text-center bg-gray-100 py-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Did You Know?</h3>
        <p className="text-lg text-gray-600 transition-opacity duration-500">{randomFact}</p>
      </section>

      {/* Customer Reviews Section */}
      <section className="mb-12 text-center">
        <h3 className="text-3xl font-semibold mb-6">What Our Customers Say</h3>
        <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto transition-all duration-300">
          <p className="text-xl text-gray-800 italic mb-2">{reviews[currentReviewIndex].review}</p>
          <p className="text-lg text-gray-600">- {reviews[currentReviewIndex].name}</p>
          <div className="flex justify-center mt-4 space-x-1">
            {Array(reviews[currentReviewIndex].rating)
              .fill(0)
              .map((_, index) => (
                <span key={index} className="text-yellow-400">★</span>
              ))}
            {Array(5 - reviews[currentReviewIndex].rating)
              .fill(0)
              .map((_, index) => (
                <span key={index} className="text-gray-300">★</span>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h3>
        {faqData.map((faq) => (
          <div key={faq.id} className="mb-6">
            <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* Social Media Links */}
      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300"><FaFacebook /></a>
          <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors duration-300"><FaInstagram /></a>
          <a href="#" className="text-gray-800 hover:text-gray-500 transition-colors duration-300"><FaXTwitter /></a>
          <a href="#" className="text-red-800 hover:text-red-500 transition-colors duration-300"><FaPinterest /></a>
        </div>
      </section>
    </div>
  );
};

export default About;
