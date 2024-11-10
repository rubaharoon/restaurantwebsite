import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="text-purple-400 text-4xl font-bold">RestoNest</div>
            </div>
            <p className="text-sm mb-6">
              RestoNest offers a memorable dining experience, blending fresh ingredients, exceptional service, and a warm atmosphere. Each dish reflects our commitment to quality and passion for culinary artistry, providing a perfect setting for every occasion.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-2 rounded-full text-purple-500 hover:bg-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-purple-500 hover:bg-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-purple-500 hover:bg-gray-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4">Opening Restaurant</h3>
            <p className="text-sm">Mon-Thur: 09:00am - 1:00am</p>
            <p className="text-sm">Fri: 09:00am - 1:00am</p>
            <p className="text-sm">Sat-Sun: 10:00am - 3:00am</p>
          </div>

          {/* User Links */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4">User Link</h3>
            <ul className="text-sm space-y-2">
              <li>About Us</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact and Newsletter */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm mb-2">123 Main Street, Nazimabad,Karachi</p>
            <p className="text-sm mb-4">03323577700</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="p-2 w-full text-black rounded-l-md"
              />
              <button className="bg-purple-400 text-white px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-gray-600 pt-4 text-sm">
          <p>©2024 RestoNest, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
