import Header from "../../components/header";
import Footer from "../../components/footer";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-8 py-16 bg-white max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="flex flex-col items-center lg:items-start max-w-lg lg:max-w-md text-center lg:text-left">
          <h2 className="text-purple-500 text-lg font-semibold mb-2">
            About Our Food
          </h2>
          <h1 className="text-4xl font-extrabold text-[#212121] leading-tight mb-4">
            Where Quality Meets Excellent{" "}
            <span className="text-purple-600"> Service.</span>
          </h1>
          <p className="text-[#5C5C5B] mb-6">
            It’s the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served with efficient service.
          </p>

          {/* Icons Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Quality Icon and Text */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/qualityfoodicon.png"
                alt="Quality Food Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-sm font-semibold text-[#212121]">
                  Super Quality Food
                </h3>
                <p className="text-[#212121] text-sm">
                  Crafted with fresh, high-quality ingredients.
                </p>
              </div>
            </div>

            {/* Reputation Icon and Text */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/wellreputationicon.png"
                alt="Reputation Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-sm font-semibold text-[#212121]">
                  Well Reputation
                </h3>
                <p className="text-[#212121] text-sm">
                  Known for excellent service and experience.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-8">
            <a href="/about">
              <button className="bg-[#F3274C] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-base font-semibold">
                About Us
              </button>
            </a>
            {/* Text */}
            <p className="font-bold text-xs text-purple-600 mt-2 lg:mt-0">
              BRENDON GARREY
              <br />{" "}
              <span className="text-[#212121] text-xs">
                CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.{" "}
              </span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:max-w-xl flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src="/images/burger.jpg"
            alt="Burger display"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />

          <span className="absolute bottom-[20px] right-[20px] bg-purple-500 w-[150px] h-[40px] text-white px-3 py-1 rounded-lg font-semibold text-center transform -rotate-12 shadow-md">
            Since 2024
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
