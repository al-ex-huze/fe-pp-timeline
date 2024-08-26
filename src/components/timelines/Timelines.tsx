import { useEffect, useState } from "react";

import { getEvents } from "../../../api";

import ChartConstructor from "./ChartConstructor";

import "../../styles/Content.css";

const Timelines = ({
    currentTimeline,
    setCurrentTimeline,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState([]);

    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    useEffect(() => {
        console.log("!! Timeline UseEffect() !!");
        setIsLoading(true);
        getEvents(currentTimeline, sortByQuery, sortByIsAsc).then((events) => {
            setEventsData(events);
            setIsLoading(false);
        });
    }, [currentTimeline, sortByQuery, sortByIsAsc]);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <div>
            Timelines
            <ChartConstructor
                eventsData={eventsData}
                currentTimeline={currentTimeline}
                setCurrentTimeline={setCurrentTimeline}
            />
        </div>
    );
};

export default Timelines;
