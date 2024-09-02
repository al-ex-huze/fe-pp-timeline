// import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

// import { getEventByID } from "../../../api";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "../../styles/TextScroller.css";

const TextScrollerTimeline = ({
    eventSingleData,
}: {
    eventSingleData: any;
}) => {
    // const [isLoading, setIsLoading] = useState(false);
    // const [projectEventSingleData, setProjectEventSingleData] =
    //     useState<any>(null);

    // useEffect(() => {
    //     setIsLoading(true);
    //     console.log("CarouselTextScroller Use Effect()");
    //     console.log(eventSingleData.event_id);
    //     if (eventSingleData.event_id !== null) {
    //         getEventByID(eventSingleData.event_id!).then((event) => {
    //             setProjectEventSingleData(event);
    //             setIsLoading(false);
    //         });
    //     }
    // }, [eventSingleData.event_id]);

    // if (isLoading) return <p>"Look at all those projects!"</p>;
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper__text-scroller-timeline"
            >
                <SwiperSlide>
                    <p>{eventSingleData.title}</p>
                    <p>{eventSingleData.body}</p>
                    <p>{eventSingleData.skills}</p>
                    <p>{eventSingleData.topics}</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TextScrollerTimeline;
