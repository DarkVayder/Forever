import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission (backend or email service integration)
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>

      <h2 className="text-4xl font-bold text-center mb-8">
        <Title text1="Reach out" text2="to us" />
      </h2>

      {/* Contact Information Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="Contact Us" />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Store Street <br /> Store 180, Abuja, Nigeria
          </p>
          <p className="text-gray-500">
            No: (234) 123 456 789 <br /> Email: support@4ever.com
          </p>
          <p className="text-gray-600 font-semibold text-xl">Careers at 4ever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Expore Jobs</button>
        </div>
      </div>

      {/* Contact Form */}
      <section className="mb-12">
        {submitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Thank you for your message!</h3>
            <p className="text-lg text-gray-600">We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-500 transition duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Company Info */}
      <section className="bg-gray-100 p-6 rounded-lg mb-12 text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Contact Information</h3>
        <div className="flex flex-col items-center space-y-4">
          <p className="flex items-center space-x-2 text-lg">
            <FaPhone className="text-gray-700" /> <span>+234 123 456</span>
          </p>
          <p className="flex items-center space-x-2 text-lg">
            <FaEnvelope className="text-gray-700" /> <span>support@4ever.com</span>
          </p>
          <p className="flex items-center space-x-2 text-lg">
            <FaMapMarkerAlt className="text-gray-700" /> <span>123 Fashion Street, Abuja</span>
          </p>
          <p className="text-lg">Mon - Fri: 9am - 5pm</p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" className="text-pink-600 hover:text-pink-800" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="text-gray-800 hover:text-gray-500" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" className="text-red-800 hover:text-red-500" aria-label="Pinterest"><FaPinterest /></a>
        </div>
      </section>

      {/* Map */}
      <section className="mt-12">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509369!2d144.96305771531633!3d-37.81362797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bf1bbd29%3A0x5045675218ceed27!2zU3RhdGUgTGlicmFyeSwgTmV3IFlvcmsgVUs!5e0!3m2!1sen!2sus!4v1634125845092!5m2!1sen!2sus"
          className="w-full h-64 border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
