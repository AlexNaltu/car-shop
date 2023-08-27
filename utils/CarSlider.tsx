"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineInstagram } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function App() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      modules={[Pagination]}
      className="w-[90vw]"
    >
      <SwiperSlide className="mb-6">
        <Image
          src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1522788610512-99f3ac3010a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1591122543285-3e7fdb33c786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="/"
          width={300}
          height={100}
        />
        <Link
          href="https://www.instagram.com/"
          className="flex text-xs items-end translate-y-[-100%] text-white"
        >
          <AiOutlineInstagram size={20} />
          <p>@car_shop</p>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
