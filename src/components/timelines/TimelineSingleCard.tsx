import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { getTimelineByName } from "../../../api";

// import DeleteTimeline from "../timelines/DeleteTimeline";
import ChartConstructor from "./charts/ChartConstructor";
// import AddEvent from "../events/AddEvent";
import EventSelector from "../events/EventSelector";
// import AddTimeline from "./AddTimeline";

import "../../styles/Content.css";

// import ReposParent from "./repos/ReposParent";

const TimelineSingleCard = ({
    timeline_name,
    timelinesData,
    timelineSingleData,
    setLineChartSelectedWeek,
    setTimelineSingleData,
}: {
    timeline_name: any;
    timelinesData: any;
    timelineSingleData: any;
    setTimelineSingleData: any;
    setLineChartSelectedWeek: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventSingleData, setEventSingleData] = useState({});
    const [eventID, setEventID] = useState(0);

    // const { timeline_name = "Northcoders Bootcamp" } = useParams();

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSingleCard Use Effect()");
        if (timeline_name) {
            getTimelineByName(timeline_name).then((timeline) => {
                setTimelineSingleData(timeline);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false)
        }
    }, []);

    if (isLoading) return <p>Loading Timeline Single Card</p>;
    return (
        <>
            <div className="Content">
                <h1>{timeline_name}</h1>
                <ChartConstructor
                    setEventID={setEventID}
                    timelinesData={timelinesData}
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
                {/* <AddEvent timelineSingleData={timelineSingleData} />
                <AddTimeline />
                <DeleteTimeline timelineToDelete={timeline_name} /> */}
            </div>
        </>
    );
};

export default TimelineSingleCard;
