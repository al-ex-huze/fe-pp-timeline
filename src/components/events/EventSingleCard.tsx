import DeleteEvent from "./DeleteEvent";

import "../../styles/Constructor.css";
import TextScrollerTimeline from "../carousels/TextScrollerTimeline";

const EventSingleCard = ({
    eventSingleData,
}: {
    eventSingleData: any;
    setEventSingleData: any;
}) => {
    return (
        <>
            <TextScrollerTimeline eventSingleData={eventSingleData} />
            <DeleteEvent eventSingleData={eventSingleData} />
        </>
    );
};

export default EventSingleCard;
