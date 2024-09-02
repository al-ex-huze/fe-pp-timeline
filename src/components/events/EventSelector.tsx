import { useEffect, useState } from "react";



import EventSingleCard from "./EventSingleCard";

import "../../styles/Constructor.css"
import { getEventByID } from "../../../api";

const EventSelector = ({
    eventID,
    eventSingleData,
    setEventSingleData,
}: {
    eventID: any;
    eventSingleData: any;
    setEventSingleData: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log("EventSelector Use Effect()");
        if (eventID !== 0) {
            getEventByID(eventID!).then((event) => {
                setEventSingleData(event);
                setIsLoading(false);
            });
        }
    }, [eventID]);

    if (eventID === 0) return null;
    if (isLoading) return <p>Loading Event</p>;
    return (
        <div className="Content_Event-component">
            <EventSingleCard
                eventSingleData={eventSingleData}
                setEventSingleData={setEventSingleData}
            />
        </div>
    );
};

export default EventSelector;
