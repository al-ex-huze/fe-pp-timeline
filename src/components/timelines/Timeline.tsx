

import { getTimelineByName } from "../../../api";

import "../../styles/Content.css";
import TimelineSidebar from "./TimelinesSidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TimelineSingleCard from "./TimelineSingleCard";

const Timeline = ({
    timelinesData,
    setTimelinesData,
    currentTimeline,
    setCurrentTimeline,
}: {
    timelinesData: any;
    setTimelinesData: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [, setTimelineSingleData] = useState({});
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
        <>
            <div className="Sidebar">
                <TimelineSidebar
                    currentTimeline={currentTimeline}
                    setCurrentTimeline={setCurrentTimeline}
                    timelinesData={timelinesData}
                    setTimelinesData={setTimelinesData}
                />
            </div>
            <div className="Content">
                <TimelineSingleCard timeline_name={timeline_name} timelinesData={timelinesData} setTimelinesData={setTimelinesData} currentTimeline={currentTimeline} setCurrentTimeline={setCurrentTimeline} />
            </div>
        </>
    );
};

export default Timeline;
