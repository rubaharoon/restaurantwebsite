import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-image bg-repeat bg-cover bg-bottom w-full h-screen">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-title text-[#FFFFFF]">
          Welcome to <br />{" "}
          <span className="text-purple-400 font-title">RestoNest</span>
        </h1>
        <p className="text-[#FFFFFF] font-body mt-4">
          &quot;RestoNest offers a memorable dining experience, blending fresh
          ingredients, exceptional service, and a warm atmosphere. Each dish
          reflects our commitment to quality and passion for culinary artistry,
          providing a perfect setting for every occasion.&quot;
        </p>
        <a href="/menu">
        <button className="bg-transparent hover:bg-purple-600 text-white font-semibold hover:text-white py-3 px-6 border border-purple-600 hover:border-transparent rounded mt-6">
          Explore Menu
        </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
