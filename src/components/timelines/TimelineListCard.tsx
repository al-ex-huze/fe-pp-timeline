import { Link } from "react-router-dom";

import DeleteTimeline from "./DeleteTimeline";

const TimelineListCard = ({
    timeline,
    currentTimeline,
    setCurrentTimeline,
}: {
    timeline: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const handleButton = () => {
        setCurrentTimeline(timeline);
    };
    return (
        <>
        <Link to={`/timelines/${timeline.timeline_name}`}>
            <button onClick={handleButton}>{timeline.timeline_name}</button>
        </Link>
        <DeleteTimeline currentTimeline={currentTimeline} />
        </>

    );
};

export default TimelineListCard;
