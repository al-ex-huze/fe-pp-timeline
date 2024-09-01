import { useEffect, useState } from "react";
import { getTimelines } from "../../../api";
import CarouselSidebar from "./carousels/CarouselSidebar";
// import TimelineListSelect from "./TimelineListSelect";

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
        <div className="Sidebar">
            <CarouselSidebar timelinesData={timelinesData}></CarouselSidebar>
            {/* <TimelineListSelect /> */}
        </div>
    );
};

export default TimelineSidebar;
