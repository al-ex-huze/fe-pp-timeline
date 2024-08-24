import { useEffect, useState } from "react";

import { getEvents } from "../../../api";

import TimelineConstructor from "./TimelineConstructor";

const Timelines = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState([]);
    const [timelineFilter]  = useState("Northcoders Bootcamp");
    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    useEffect(() => {
        console.log("!! Timeline UseEffect() !!");
        setIsLoading(true);
        getEvents(timelineFilter, sortByQuery, sortByIsAsc).then((events) => {
            setEventsData(events);
            console.log(events)
            setIsLoading(false);
        });
    }, [timelineFilter, sortByQuery, sortByIsAsc]);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <div className="Content">
            Timelines
            <TimelineConstructor eventsData={eventsData} />
        </div>
    );
};

export default Timelines;
