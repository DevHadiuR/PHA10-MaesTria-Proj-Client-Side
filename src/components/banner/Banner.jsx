import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/banner1.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Unveil Timeless Beauty
                </h1>
                <p className="mb-5 font-serif">
                  Embark on a journey of artistic discovery with our exquisite
                  sculptures and timeless masterpieces. From delicate clay
                  creations to majestic stone sculptures, each piece tells a
                  story of creativity and craftsmanship. Immerse yourself in the
                  world of sculptural artistry and experience the awe-inspiring
                  beauty that awaits at MaesTria
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/banner2.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Captivating Creations
                </h1>
                <p className="mb-5 font-serif">
                  Dive into a realm of artistic expression and creativity with
                  our captivating sculptures. Explore the intricate details of
                  each piece, crafted with passion and precision. Whether
                  it&apos;s the smooth curves of a metal sculpture or the
                  intricate patterns of a beaded masterpiece, each creation is a
                  testament to the beauty of artistry. Experience the magic of
                  sculptural art.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/banner3.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-45"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Ethereal Creations
                </h1>
                <p className="mb-5 font-serif">
                  Immerse yourself in a realm of ethereal beauty and boundless
                  creativity. Our curated selection of sculptures captures the
                  essence of imagination and transforms it into tangible works
                  of art. From intricate metal sculptures to delicate food
                  carvings, each piece emanates a sense of wonder and awe.
                  Explore the extraordinary world of sculptural masterpieces at
                  MaesTria and elevate your surroundings with the magic of
                  artistic expression.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url(/banner4.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Nature&apos;s Canvas
                </h1>
                <p className="mb-5 font-serif">
                  Step into a world where natures bounty becomes a canvas for
                  artistic expression. Our collection of sculptures celebrates
                  the raw beauty of natural materials, expertly shaped by
                  skilled artisans into awe-inspiring works of art. From rugged
                  stone sculptures to graceful wood carvings, each piece
                  reflects the timeless elegance of the natural world. Immerse
                  yourself in the harmonious blend of art and nature at MaesTria
                  and discover the beauty that lies within the elements.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
