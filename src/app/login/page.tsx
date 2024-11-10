import React from "react";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function Login() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side with Image */}
          <div className="hidden md:flex md:w-1/2 bg-green-50 justify-center items-center">
            <Image
              src="/images/login.jpg"
              alt="Login Image"
              width={500}
              height={500}
              className="rounded"
            />
          </div>

          {/* Right Side with Form */}
          <div className="flex w-full md:w-1/2 p-8 items-center justify-center bg-white">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
                Welcome Back to RestoNest!
              </h2>

              <form>
                <div className="mb-6 rounded-lg">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 mb-2"
                  >
                    Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-center">
                Dont have an account
                <a href="/contact" className="text-purple-600 hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
