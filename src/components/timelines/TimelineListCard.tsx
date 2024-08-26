import { Link } from "react-router-dom";

const TimelineListCard = ({
    timeline,
    setCurrentTimeline,
}: {
    timeline: any;
    setCurrentTimeline: any;
}) => {
    const handleButton = () => {
        setCurrentTimeline(timeline);
    };
    return (
        <Link to={`/timelines/${timeline.timeline_name}`}>
            <button onClick={handleButton}>{timeline.timeline_name}</button>
        </Link>
    );
};

export default TimelineListCard;
