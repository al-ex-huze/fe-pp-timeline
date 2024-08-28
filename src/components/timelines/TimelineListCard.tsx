import { Link } from "react-router-dom";

const TimelineListCard = ({ timeline }: { timeline: any; }) => {
    const handleDeleteButton = () => {
    };
    return (
        <>
            TimelineListCard
            <Link to={`/timelines/${timeline.timeline_name}`}>
                <button onClick={handleDeleteButton}>{timeline.timeline_name}</button>
            </Link>
        </>

    );
};

export default TimelineListCard;