import { useEffect, useState } from "react";

import TimelineSelector from "../timelines/TimelineSelector";
import { getTimelines } from "../../../api";

import "../../styles/Content.css";
import TimelineSidebar from "./TimelinesSidebar";

const Timelines = ({
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

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSelector Use Effect()");
        getTimelines().then((timelines) => {
            setTimelinesData(timelines);
            setIsLoading(false);
        });
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
                Timelines
                {currentTimeline.timeline_name}
                <TimelineSelector
                    timelinesData={timelinesData}
                    setTimelinesData={setTimelinesData}
                    currentTimeline={currentTimeline}
                    setCurrentTimeline={setCurrentTimeline}
                />
            </div>
        </>
    );
};

export default Timelines;
