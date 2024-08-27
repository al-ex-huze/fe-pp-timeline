import { getEventByID } from "../../../../api";

import { useEffect, useState } from "react";
import DeleteEvent from "./DeleteEvent";

const EventSingleCard = ({

}: {
    }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventSingleData, setEventSingleData]: any = useState({});
    const event_id = 1;

    useEffect(() => {
        setIsLoading(true);
        console.log("EventSelector Use Effect()");
        console.log("event_id " + event_id);
        if (event_id) {
            getEventByID(Number(event_id!)).then((event) => {
                console.log("eventbyID" + event)
                setEventSingleData(event);
                setIsLoading(false);
            });
        }
    }, []);

    if (!event_id) return null;
    if (isLoading) return <p>Loading Event</p>;
    return (
        <div className="Content__micro-card">
            Event {event_id} {eventSingleData.event_id}  {eventSingleData.title} {eventSingleData.body} {eventSingleData.start_date} {eventSingleData.end_date}
            <DeleteEvent eventSingleData={eventSingleData} />
        </div>
    );
};

export default EventSingleCard;
