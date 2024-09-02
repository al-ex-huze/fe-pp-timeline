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
// import { Link } from "react-router-dom";

const Carousel = ({ timelinesData }: { timelinesData: any }) => {
    return (
        <div className="Carousel">
            <Swiper
                // cssMode={true}
                speed={100}
                spaceBetween={50}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 4000,
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
                                <SwiperSlide>
                                    <Link
                                        to={`/timelines/${timeline.timeline_name}`}
                                    >
                                        {timeline.timeline_name}
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

export default Carousel;
