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

const Carousel = ({
    carouselData,
    setProjectEventID,
}: {
    carouselData: any;
    setProjectEventID: any;
}) => {
    const handleSelectProject = (selectedID: any) => {
        console.log("HANDLE " + selectedID);
        setProjectEventID(selectedID);
    };
    if (carouselData == undefined) return <div> UNDEFINED</div>;
    return (
        <div className="Carousel">
            <Swiper
                // cssMode={true}
                speed={5000}
                // spaceBetween={0}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
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
                {carouselData.map((datum: any) => {
                    if (datum.timeline === "Project") {
                        return (
                            <SwiperSlide key={datum.event_id}>
                                {/* <div onClick={setProjectEventID(datum.event_id)}> */}
                                <div
                                    onClick={() =>
                                        handleSelectProject(datum.event_id)
                                    }
                                >
                                    {datum.title}
                                </div>
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </div>
    );
};

export default Carousel;
