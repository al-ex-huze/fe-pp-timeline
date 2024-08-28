import { Link } from "react-router-dom";

import DeleteTimeline from "./DeleteTimeline";

const TimelineListCard = ({ timeline }: { timeline: any; }) => {
    const handleDeleteButton = () => {
    };
    return (
        <>
            TimelineListCard
            <Link to={`/timelines/${timeline.timeline_name}`}>
                <button onClick={handleDeleteButton}>{timeline.timeline_name}</button>
            </Link>
            <DeleteTimeline timelineToDelete={timeline.timeline_name} />
        </>

    );
};

export default TimelineListCard;