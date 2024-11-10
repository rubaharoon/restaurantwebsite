"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image
           src="/images/image1.png" alt="Image 1" className="w-full h-auto max-h-[80vh] object-cover" width={1920} height={1080} />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Image
           src="/images/image2.png" alt="Image 2" className="w-full h-auto max-h-[80vh] object-cover " width={1920} height={1080} />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Image 
          src="/images/image3.png" alt="Image 3" className="w-full h-auto max-h-[80vh] object-cover" width={1920} height={1080} />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <Image src="/images/image4.png" alt="Image 4" className="w-full h-auto max-h-[80vh] object-cover" width={1920} height={1080} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
