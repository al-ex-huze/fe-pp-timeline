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
        <div className="Sidebar__component">
            Timeline Selector
            <ul>
                {timelinesData.map((timeline: any) => {
                    return (
                        <TimelineListCard
                            timeline={timeline}
                            setCurrentTimeline={setCurrentTimeline}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default TimelineSelector;
