import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTimelineByName } from "../../../api";

import "../../styles/Content.css";

import DeleteTimeline from "../timelines/DeleteTimeline";
import ChartConstructor from "./ChartConstructor";
import AddEvent from "./events/AddEvent";
import EventSingleCard from "./events/EventSingleCard";

const TimelineSingleCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [timelineSingleData, setTimelineSingleData] = useState({});

    const { timeline_name } = useParams();

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSelector Use Effect()");
        console.log("timeline_name " + timeline_name);
        if (timeline_name) {
            getTimelineByName(timeline_name!).then((timeline) => {
                setTimelineSingleData(timeline);
                setIsLoading(false);
            });
        }
    }, []);

    if (isLoading) return <p>Loading Timelines</p>;
    return (
        <><div className="Content">
            TimelineSingleCard {timeline_name}
            <ChartConstructor
                timelineSingleData={timelineSingleData}
                setTimelineSingleData={setTimelineSingleData} />
            <AddEvent />
            <EventSingleCard />
            <DeleteTimeline timelineToDelete={timeline_name} />
        </div></>
    );
};

export default TimelineSingleCard;
