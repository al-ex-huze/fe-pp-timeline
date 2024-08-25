import { useEffect, useState } from "react";

import { getEvents } from "../../../api";

import ChartConstructor from "./ChartConstructor";

const Timelines = ({
    currentTimeline,
    setCurrentTimeline,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState([]);
    const [timelineFilter] = useState("Northcoders Bootcamp");
    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    useEffect(() => {
        console.log("!! Timeline UseEffect() !!");
        setIsLoading(true);
        getEvents(timelineFilter, sortByQuery, sortByIsAsc).then((events) => {
            setEventsData(events);
            console.log(events);
            setIsLoading(false);
        });
    }, [timelineFilter, sortByQuery, sortByIsAsc]);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <div className="Content">
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
