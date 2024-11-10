"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

const categories = [
  {
    name: "Breakfast",
    image: "../images/breakfast.jpg",
    items: "10 Dishes in the Menu",
  },
  {
    name: "FastFood",
    image: "../images/burger.jpg",
    items: "8 Dishes in the Menu",
  },
  {
    name: "Bar B Q",
    image: "../images/bbq.jpg",
    items: "6 Dishes in the Menu",
  },
  {
    name: "Pizza",
    image: "../images/pizza.jpg",
    items: "5 Dishes in the Menu",
  },
  {
    name: "ChineseFood",
    image: "../images/chinese.jpg",
    items: "8 Dishes in the Menu",
  },
  {
    name: "OrganicFood",
    image: "../images/organicfood.jpg",
    items: "4 Dishes in the Menu",
  },
  {
    name: "Sandwiches",
    image: "../images/sandwitch.jpg",
    items: "8 Dishes in the Menu",
  },
  {
    name: "Dessert",
    image: "../images/dessert.jpg",
    items: "10 Dishes in the Menu",
  },
];

export default function CategoryCarousel() {
  return (
    <div className="text-center my-12">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2 text-gray-500">Categories</h2>
      <div className="flex justify-center">
        <div className="w-24 h-1 bg-purple-500 rounded-full mb-6"></div>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          414: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="py-6"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-60 h-40 bg-white rounded-3xl shadow-lg p-2">
              <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-purple-500">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Text Styling */}
            <h3 className="text-lg font-semibold mt-4 text-gray-500">
              {category.name}
            </h3>
            <p className="text-sm text-purple-500">{category.items}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
