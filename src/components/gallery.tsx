"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    '/images/gallery1.png',
    '/images/gallery2.png',
    '/images/gallery3.png',
    '/images/gallery4.png',
    '/images/gallery5.png',
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[ Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
