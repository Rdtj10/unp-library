"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import {AutoPlay, Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';


const index = () => {
  return (
    <section className="py-20 px-10 flex justify-center bg-white">
    <div className="container">
      <h1 className="font-bold text-4xl pb-12 text-center text-black">Trending</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          delay:2000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/buku.png"></img>
        </SwiperSlide>
      </Swiper>

    </div>
    </section>

  );
};

export default index