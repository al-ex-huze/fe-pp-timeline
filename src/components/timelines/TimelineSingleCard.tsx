import DeleteTimeline from "../timelines/DeleteTimeline";
import ChartConstructor from "./ChartConstructor";

import { getTimelineByName } from "../../../api";

import "../../styles/Content.css";
import { useEffect, useState } from "react";
import AddEvent from "./events/AddEvent";
import EventSingleCard from "./events/EventSingleCard";

const TimelineSingleCard = ({
    timeline_name,
    currentTimeline,
    setCurrentTimeline,
}: {
    timeline_name: any;
    timelinesData: any;
    setTimelinesData: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [, setTimelineSingleData] = useState({});

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
        <div className="Content">
            Timelines {timeline_name} {currentTimeline.timeline_name}
            <ChartConstructor
                currentTimeline={currentTimeline}
                setCurrentTimeline={setCurrentTimeline}
            />
            <AddEvent currentTimeline={currentTimeline}
            />
            <EventSingleCard />
            <DeleteTimeline timelineToDelete={currentTimeline.timeline_name} />
        </div>
    );
};

export default TimelineSingleCard;
