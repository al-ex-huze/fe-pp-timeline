import AddEvent from "./AddEvent";
import EventSingleCard from "./EventSingleCard";


const EventSelector = ({

    currentTimeline,

}: {
    timelinesData: any;
    setTimelinesData: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {

    return (
        <div className="Content_component">
            EVENT Selector
            <EventSingleCard />
            <AddEvent currentTimeline={currentTimeline} />
        </div>
    );
};

export default EventSelector;
