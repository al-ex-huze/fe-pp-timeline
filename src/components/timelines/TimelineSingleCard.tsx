import AddTimeline from "../timelines/AddTimeline";
import DeleteTimeline from "../timelines/DeleteTimeline";
import ChartConstructor from "./ChartConstructor";

import "../../styles/Content.css";
import TimelineSidebar from "./TimelinesSidebar";

const TimelineSingleCard = ({
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
                <ChartConstructor
                    currentTimeline={currentTimeline}
                    setCurrentTimeline={setCurrentTimeline}
                />
                <AddTimeline />
                <DeleteTimeline currentTimeline={currentTimeline} />
            </div>
        </>
    );
};

export default TimelineSingleCard;
