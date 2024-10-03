import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6">
      <section className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className='text-2xl font-bold text-white'>Bike Bliss</p>
        
        <div className='space-x-6 text-white'>
          <a href='#' className='hover:underline'>Features</a>
          <a href='#' className='hover:underline'>Testimonials</a>
          <a href='#' className='hover:underline'>FAQs</a>
        </div>

        <div className="flex space-x-6 text-white">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-500">
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300">Terms of Service</a>
        <a href="#" className="hover:text-gray-300">Cookies Settings</a>
      </div>
    </footer>
  );
};

export default Footer;
