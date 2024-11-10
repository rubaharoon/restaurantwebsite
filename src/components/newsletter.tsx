import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-64 flex items-center justify-center relative" style={{ backgroundImage: "url('/images/newsletter.png')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 p-6 text-center text-white max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h2>
        <p className="text-sm mb-6">Stay updated with the latest news and offers from us.</p>
        <form className="flex items-center">
          <input
            type="email"
            placeholder="Type here"
            className="px-4 py-2 rounded-l-md w-full text-black focus:outline-none"
          />
          <button type="submit" className="bg-purple-400 hover:bg-purple-600 text-white px-4 py-2 rounded-r-md">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
