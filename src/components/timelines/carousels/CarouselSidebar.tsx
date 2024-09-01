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
import { Link } from "react-router-dom";

const CarouselSidebar = ({ timelinesData }: { timelinesData: any }) => {
    return (
        <div className="Carousel">
            <Swiper
                // cssMode={true}
                spaceBetween={50}
                // effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={2}
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
                    disableOnInteraction: true,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                className="mySwiper"
            >
                <ul>
                    {timelinesData.map((timeline: any) => {
                        return (
                            <li key={timeline.timeline_name}>
                                <SwiperSlide className="Carousel__swiper-slide">
                                    <Link
                                        className="Carousel-Sidebar__micro-card"
                                        to={`/timelines/${timeline.timeline_name}`}
                                    >
                                        {/* <button> */}
                                        {timeline.timeline_name}
                                        {/* </button> */}
                                    </Link>
                                </SwiperSlide>
                            </li>
                        );
                    })}
                </ul>
            </Swiper>
        </div>
    );
};

export default CarouselSidebar;
