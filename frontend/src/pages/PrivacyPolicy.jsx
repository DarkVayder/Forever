import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

const PrivacyPolicy = () => {

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
        <Title text1={'Privacy'} text2={'Policy'} />
      </div>
      <p className="text-gray-700 mb-4">
        At 4ever, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and your rights regarding that data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect various types of information, including:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data (IP address, browser type, usage patterns, etc.)</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the information we collect in various ways, including to:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Provide, operate, and maintain our services</li>
        <li>Improve and personalize your experience on our site</li>
        <li>Communicate with you about your orders and inquiries</li>
        <li>Send you promotional information and updates</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
      <p className="text-gray-700 mb-6">
        We may share your personal information with third-party services that help us operate our business, such as payment processors or email service providers. We ensure that these third parties comply with relevant data protection laws.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
      <p className="text-gray-700 mb-6">
        You have the right to access, correct, or delete your personal information at any time. You can also opt out of receiving marketing communications by following the unsubscribe instructions in the emails we send you.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Security</h2>
      <p className="text-gray-700 mb-6">
        We take appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is entirely secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
      <p className="text-gray-700 mb-6">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and you are encouraged to review the policy periodically.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        If you have any questions about this Privacy Policy, please contact us at privacy@4ever.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
