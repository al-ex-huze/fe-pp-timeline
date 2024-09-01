import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTimelineByName } from "../../../api";

import "../../styles/Content.css";

import DeleteTimeline from "../timelines/DeleteTimeline";
import ChartConstructor from "./charts/ChartConstructor";
import AddEvent from "./events/AddEvent";
import EventSelector from "./events/EventSelector";
// import ReposParent from "./repos/ReposParent";

const TimelineSingleCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [timelineSingleData, setTimelineSingleData] = useState({});
    const [eventSingleData, setEventSingleData] = useState({});
    const [eventID, setEventID] = useState(0);
    const [toReloadAddEvent, setToReloadAddEvent] = useState(false);

    const { timeline_name } = useParams();

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSelector Use Effect()");
        if (timeline_name) {
            getTimelineByName(timeline_name!).then((timeline) => {
                setTimelineSingleData(timeline);
                setIsLoading(false);
            });
        }
    }, []);

    if (isLoading) return <p>Loading Timelines</p>;
    return (
        <>
            <div className="Content">
                TimelineSingleCard {timeline_name}
                <ChartConstructor
                    setEventID={setEventID}
                    timelineSingleData={timelineSingleData}
                    setTimelineSingleData={setTimelineSingleData}
                />
                <EventSelector
                    eventID={eventID}
                    eventSingleData={eventSingleData}
                    setEventSingleData={setEventSingleData}
                />
                {/* <ReposParent /> */}
                {!toReloadAddEvent ? (
                    <AddEvent
                        toReloadAddEvent={toReloadAddEvent}
                        setToReloadAddEvent={setToReloadAddEvent}
                    />
                ) : null}
                <DeleteTimeline timelineToDelete={timeline_name} />
            </div>
        </>
    );
};

export default TimelineSingleCard;
