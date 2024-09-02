import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "../../styles/CarouselTextScroller.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { getEventByID } from "../../../api";

const CarouselTextScroller = ({ projectEventID }: { projectEventID: any }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [projectEventSingleData, setProjectEventSingleData] = useState(null);

    // if (projectEventID !== null) {
    useEffect(() => {
        setIsLoading(true);
        console.log("CarouselTextScroller Use Effect()");
        console.log(projectEventID);
        if (projectEventID !== null) {
            getEventByID(projectEventID!).then((event) => {
                setProjectEventSingleData(event);
                setIsLoading(false);
            });
        }
    }, [projectEventID]);

    if (isLoading) return <p>"Look at all those projects!"</p>;
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper__text-scroller"
            >
                <SwiperSlide>
                    <h4>Projects</h4>

                    {projectEventSingleData === null ? (
                        <p>"Look at all those projects!"</p>
                    ) : (
                        <>
                            <p>{projectEventSingleData.title}</p>
                            <p>{projectEventSingleData.body}</p>
                            <p>{projectEventSingleData.skills}</p>
                            <p>{projectEventSingleData.topics}</p>
                        </>
                    )}
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CarouselTextScroller;
