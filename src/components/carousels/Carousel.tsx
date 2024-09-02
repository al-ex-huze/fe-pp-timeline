// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/Carousel.css";

import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Carousel = ({ carouselData }: { carouselData: any }) => {
    return (
        <div className="Carousel">
            <Swiper
                // cssMode={true}
                speed={5000}
                // spaceBetween={0}
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
                    delay: 400,
                    disableOnInteraction: true,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                className="mySwiper"
            >
                {carouselData ? (
                    <ul>
                        {carouselData.map((datum: any) => {
                            if (datum.timeline === "Project") {
                                return (
                                    <li key={datum.title}>
                                        <SwiperSlide>
                                            <Link
                                                to={`/timelines/${datum.title}`}
                                            >
                                                {datum.title}
                                            </Link>
                                        </SwiperSlide>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                ) : null}
            </Swiper>
        </div>
    );
};

export default Carousel;
