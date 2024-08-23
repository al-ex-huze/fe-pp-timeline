import { useEffect, useState } from "react";

import { getEvents } from "../../../api";

import TimelineConstructor from "./TimelineConstructor";

const Timeline = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        console.log("!! TimelineConstructor UseEffect() !!");
        setIsLoading(true);
        getEvents().then((events) => {
            setEventsData(events);
            console.log(events);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <div className="Content">
            Timeline
            <TimelineConstructor eventsData={eventsData} />
        </div>
    );
};

export default Timeline;
