import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center mb-10">
          <h3 className="text-sm font-semibold text-purple-600 tracking-widest uppercase mb-2">
            Contact Us
          </h3>
          <h2 className="text-3xl font-bold text-gray-500 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600">
            Have questions, suggestions, or need assistance? Reach out to us via
            the form below. We're here to help!
          </p>
        </div>

        {/* Contact Form */}
        <div className="container mx-auto max-w-2xl bg-purple-200 rounded-lg shadow-lg p-8">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-purple-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-purple-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-purple-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
