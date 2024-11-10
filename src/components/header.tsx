"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple-400 text-black shadow-md opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-white font-bold text-lg mr-4">
                <img
                  src="../images/logo.png"
                  alt="Logo"
                  className="h-20 w-20 mr-2"
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-white hover:text-purple-800">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-800">
              About
            </Link>
            <Link href="/menu" className="text-white hover:text-purple-800">
              Menu
            </Link>
            <Link
              href="/reservation"
              className="text-white hover:text-purple-800"
            >
              Reservation
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-800">
              Contact Us
            </Link>
          </nav>
          {/* Log In Button */}
          <div className="hidden md:block">
            <Link href="/login" className="h-6 w-6 text-[#FFFFFF]">
              <button className="bg-purple-500 hover:bg-purple-600 text-[#FFFFFF] font-bold py-2 px-4 border-b-4 border-[#FFFFFF] hover:border-[#FFFFFF] rounded">
                Log In
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-purple-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden mt-2`}
        id="mobile-menu"
      >
        <nav className="flex flex-col space-y-2">
          <Link
            href="/"
            className=" text-white hover:text-purple-800"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-purple-800"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/menu"
            className="text-white hover:text-purple-800"
            onClick={toggleMenu}
          >
            Menu
          </Link>
          <Link
            href="/reservation"
            className="text-white hover:text-purple-800"
            onClick={toggleMenu}
          >
            Reservation
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-purple-800"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link href="/login">
            <button
              className=" bg-purple-500 hover:bg-purple-600 text-[#FFFFFF] font-bold py-2 px-4 border-b-4 border-[#FFFFFF] hover:border-[#FFFFFF] rounded"
              onClick={toggleMenu}
            >
              Log In
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
