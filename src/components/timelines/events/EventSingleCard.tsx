import { useEffect, useState } from "react";

import { getEventByID } from "../../../../api";

import DeleteEvent from "./DeleteEvent";

const EventSingleCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventSingleData, setEventSingleData]: any = useState({});
    const event_id = 1;

    useEffect(() => {
        setIsLoading(true);
        console.log("EventSelector Use Effect()");
        if (event_id) {
            getEventByID(Number(event_id!)).then((event) => {
                setEventSingleData(event);
                setIsLoading(false);
            });
        }
    }, []);

    if (!event_id) return null;
    if (isLoading) return <p>Loading Event</p>;
    return (
        <div className="Content__micro-card">
            EventSingleCard {event_id} {eventSingleData.event_id}  {eventSingleData.title} {eventSingleData.body} {eventSingleData.start_date} {eventSingleData.end_date}
            <DeleteEvent eventSingleData={eventSingleData} />
        </div>
    );
};

export default EventSingleCard;
