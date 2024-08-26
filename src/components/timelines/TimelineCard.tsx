const TimelineCard = ({
    timeline,
    setCurrentTimeline,
}: {
    timeline: any;
    setCurrentTimeline: any;
}) => {
    const handleButton = () => {
        setCurrentTimeline(timeline)
    };
    return (
        <li key={timeline.timeline_name}>
            <button onClick={handleButton}>{timeline.timeline_name}</button>
        </li>
    );
};

export default TimelineCard;
