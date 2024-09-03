import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTimelineByName } from "../../../api";

import DeleteTimeline from "../timelines/DeleteTimeline";
import ChartConstructor from "./charts/ChartConstructor";
import AddEvent from "../events/AddEvent"
import EventSelector from "../events/EventSelector";
import AddTimeline from "./AddTimeline";

import "../../styles/Content.css";

// import ReposParent from "./repos/ReposParent";

const TimelineSingleCard = ({setLineChartSelectedWeek}:{setLineChartSelectedWeek:any}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [timelineSingleData, setTimelineSingleData] = useState({});
    const [eventSingleData, setEventSingleData] = useState({});
    const [eventID, setEventID] = useState(0);

    const { timeline_name = "Northcoders Bootcamp" } = useParams();

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSingleCard Use Effect()");
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
                <h1>{timeline_name}</h1>
                <ChartConstructor
                    setEventID={setEventID}
                    timelineSingleData={timelineSingleData}
                    setTimelineSingleData={setTimelineSingleData}
                    setLineChartSelectedWeek={setLineChartSelectedWeek}
                />
                <EventSelector
                    eventID={eventID}
                    eventSingleData={eventSingleData}
                    setEventSingleData={setEventSingleData}
                />
                {/* <ReposParent /> */}
                <AddEvent timelineSingleData={timelineSingleData} />
                <AddTimeline />
                <DeleteTimeline timelineToDelete={timeline_name} />
            </div>
        </>
    );
};

export default TimelineSingleCard;
