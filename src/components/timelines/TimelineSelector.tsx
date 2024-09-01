import { useEffect, useState } from "react";

import { getTimelines } from "../../../api";

import AddTimeline from "./AddTimeline";
import TimelineListCard from "./TimelineListCard";
import CarouselContent from "./carousels/CarouselContent";

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
            <ul>
                {timelinesData.map((timeline: any) => {
                    return (
                        <li key={timeline.timeline_name}>
                            <TimelineListCard
                                timeline={timeline}
                            />
                        </li>
                    );
                })}
            </ul>
            <AddTimeline />
        </div>
    );
};

export default TimelineSelector;
