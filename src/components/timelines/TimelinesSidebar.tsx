import { useEffect, useState } from "react";
import { getTimelines } from "../../../api";
// import CarouselSidebar from "./carousels/CarouselSidebar";
import TimelineListCard from "./TimelineListCard";

const TimelineSidebar = () => {
    const [timelinesData, setTimelinesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelinesSidebar Use Effect()");
        getTimelines()
            .then((timelines) => {
                setTimelinesData(timelines);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) return <p>Loading Sidebar</p>;
    return (
        <>
            <ul>
                {timelinesData.map((timeline: any) => {
                    return (
                        <li key={timeline.timeline_name}>
                            <TimelineListCard timeline={timeline} />
                        </li>
                    );
                })}
            </ul>
            {/* <CarouselSidebar timelinesData={timelinesData}></CarouselSidebar> */}
        </>
    );
};

export default TimelineSidebar;
