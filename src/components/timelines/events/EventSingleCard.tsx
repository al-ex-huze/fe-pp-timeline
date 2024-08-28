import DeleteEvent from "./DeleteEvent";

import "../../../styles/Constructor.css"

const EventSingleCard = ({
    eventSingleData,
}: {
    eventSingleData: any;
    setEventSingleData: any;
}) => {
    return (
        <div className="Content__Event-component">
            EventSingleCard {eventSingleData.event_id} {eventSingleData.title}{" "}
            {eventSingleData.body} {eventSingleData.start_date}{" "}
            {eventSingleData.end_date}
            <DeleteEvent eventSingleData={eventSingleData} />
        </div>
    );
};

export default EventSingleCard;
