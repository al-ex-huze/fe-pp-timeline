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
        <li key={timeline.timeline_name}>
            <Link to={`/timelines/${timeline.timeline_name}`}>
                <button onClick={handleButton}>{timeline.timeline_name}</button>
            </Link>
        </li>
    );
};

export default TimelineListCard;
