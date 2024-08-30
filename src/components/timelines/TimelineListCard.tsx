import { Link } from "react-router-dom";

const TimelineListCard = ({ timeline }: { timeline: any; }) => {

    return (
        <>
            TimelineListCard
            <Link to={`/timelines/${timeline.timeline_name}`}>
                <button>{timeline.timeline_name}</button>
            </Link>
        </>

    );
};

export default TimelineListCard;