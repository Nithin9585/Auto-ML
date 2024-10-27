// pages/contact-us.js

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  const images = [
    'https://res.cloudinary.com/dvmmuj2r0/image/upload/fl_preserve_transparency/v1727181095/Designer_4_iutvxb.jpg?_s=public-apps',
    'https://res.cloudinary.com/dvmmuj2r0/image/upload/fl_preserve_transparency/v1727181095/Designer_4_iutvxb.jpg?_s=public-apps',
    'https://res.cloudinary.com/dvmmuj2r0/image/upload/fl_preserve_transparency/v1727181095/Designer_4_iutvxb.jpg?_s=public-apps',
    'https://res.cloudinary.com/dvmmuj2r0/image/upload/fl_preserve_transparency/v1727181095/Designer_4_iutvxb.jpg?_s=public-apps',
    'https://res.cloudinary.com/dvmmuj2r0/image/upload/fl_preserve_transparency/v1727181095/Designer_4_iutvxb.jpg?_s=public-apps',
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden">
            <Image src={src} alt={`Pic ${index + 1}`} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Name {index + 1}</h3>
              <p className="text-gray-600">Role {index + 1}</p>
              <div className="flex justify-between mt-4">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${src}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
                <a href={`https://www.instagram.com/?url=${src}`} target="_blank" rel="noopener noreferrer" className="text-pink-500">Instagram</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              className="w-full py-2 px-4"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;