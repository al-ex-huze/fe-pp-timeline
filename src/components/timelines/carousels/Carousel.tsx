// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../styles/Carousel.css";

import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
// import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div className="Carousel">
            <Swiper
                spaceBetween={50}
                // effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={3}
                // coverflowEffect={{
                //     rotate: 0,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 1,
                //     slideShadows: true,
                // }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>One</SwiperSlide>
                <SwiperSlide>
                    Two
                </SwiperSlide>
                <SwiperSlide>Three</SwiperSlide>
                <SwiperSlide>Four</SwiperSlide>
                <SwiperSlide>Five</SwiperSlide>
                <SwiperSlide>Six</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
