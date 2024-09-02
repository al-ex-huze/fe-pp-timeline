import { useEffect, useState } from "react";

import { getTimelines } from "../../../api";

// import TimelineListCard from "./TimelineListCard";
import CarouselContent from "./carousels/CarouselContent";
import Carousel from "./carousels/Carousel";

const TimelineSelector = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [timelinesData, setTimelinesData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSelector Use Effect()");
        getTimelines().then((timelines) => {
            setTimelinesData(timelines);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    if (isLoading) return <p>Loading Timelines</p>;
    return (
        <div className="Content_component">
            <CarouselContent timelinesData={timelinesData} />
            <Carousel timelinesData={timelinesData} />
        </div>
    );
};

export default TimelineSelector;
