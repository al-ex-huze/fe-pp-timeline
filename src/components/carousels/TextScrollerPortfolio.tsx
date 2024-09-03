import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

import { getEventByID } from "../../../api";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "../../styles/TextScroller.css";

const TextScrollerPortfolio = ({ projectEventID }: { projectEventID: any }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [projectEventSingleData, setProjectEventSingleData] = useState<any>(null);

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
                slidesPerView={1}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper__text-scroller-portfolio"
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

export default TextScrollerPortfolio;
