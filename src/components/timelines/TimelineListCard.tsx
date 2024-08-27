import { Link } from "react-router-dom";

import DeleteTimeline from "./DeleteTimeline";

const TimelineListCard = ({
    timeline,
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
            <DeleteTimeline timelineToDelete={timeline.timeline_name} />
        </>

    );
};

export default TimelineListCard;
