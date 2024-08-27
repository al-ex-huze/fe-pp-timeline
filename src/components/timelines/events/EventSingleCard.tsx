import { getEventByID } from "../../../../api";

import "../../styles/Content.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteEvent from "./DeleteEvent";

const EventSingleCard = ({

}: {
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventSingleData, setEventSingleData] = useState({});
    const { event_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        console.log("EventSelector Use Effect()");
        console.log("event_id " + event_id);
        if (event_id) {
            getEventByID(Number(event_id!)).then((event) => {
                setEventSingleData(event);
                setIsLoading(false);
            });
        }
    }, []);

    if (isLoading) return <p>Loading Timelines</p>;

    return (
        <>
            <div className="Content__micro-card">
                Event {event_id}

                <DeleteEvent eventSingleData={eventSingleData} />
            </div>
        </>
    );
};

export default EventSingleCard;
 