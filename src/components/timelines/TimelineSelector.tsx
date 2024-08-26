import AddTimeline from "./AddTimeline";
import TimelineListCard from "./TimelineListCard";

const TimelineSelector = ({
    timelinesData,
    currentTimeline,
    setCurrentTimeline,
}: {
    timelinesData: any;
    setTimelinesData: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    return (
        <div className="Content_component">
            Timeline Selector
            <ul>
                {timelinesData.map((timeline: any) => {
                    return (
                        <li key={timeline.timeline_name}>
                            <TimelineListCard
                                timeline={timeline}
                                currentTimeline={currentTimeline}
                                setCurrentTimeline={setCurrentTimeline}
                            />
                        </li>
                    );
                })}
            </ul>
            <AddTimeline />
        </div>
    );
};

export default TimelineSelector;
