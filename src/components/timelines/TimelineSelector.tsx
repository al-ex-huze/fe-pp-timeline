import TimelineListCard from "./TimelineListCard";

const TimelineSelector = ({
    timelinesData,
    setCurrentTimeline,
}: {
    timelinesData: any;
    setTimelinesData: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    return (
        <div className="Content">
            Timeline Selector
            <ul>
                {timelinesData.map((timeline: any) => {
                    return (
                        <li key={timeline.timeline_name}>
                            <TimelineListCard
                                timeline={timeline}
                                setCurrentTimeline={setCurrentTimeline}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TimelineSelector;
