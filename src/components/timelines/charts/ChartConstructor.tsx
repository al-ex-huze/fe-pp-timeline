import { useEffect, useState } from "react";
import { getEvents } from "../../../../api";

import "../../../styles/Constructor.css";

// import BarChartOne from "./BarChartOne";
// import TimelineChartOneG from "./TimelineChartOneG";
// import PolarAreaChartOne from "./PolarAreaChartOne";
// import DoughnutChartOne from "./DoughnutChartOne";
// import RadarChartOne from "./RadarChartOne";

import LineConstructor from "./LineConstructor";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
// import BarApex from "./BarApex";
import TimelineApex from "./TimelineApex";
Chart.register(CategoryScale);

const ChartConstructor = ({
    setEventID,
    timelinesData,
    timelineSingleData,
    setTimelineSingleData,
    setLineChartSelectedWeek,
}: {
    setEventID: any;
    timelinesData: any;
    timelineSingleData: any;
    setTimelineSingleData: any;
    setLineChartSelectedWeek: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState([]);

    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    useEffect(() => {
        console.log("ChartConstructor UseEffect()");
        setIsLoading(true);
        getEvents(timelineSingleData.timeline_name, sortByQuery, sortByIsAsc)
            .then((events) => {
                setEventsData(events);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [timelineSingleData.timeline_name, sortByQuery, sortByIsAsc]);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <div className="Constructor">
            {eventsData[0] !== undefined ? (
                <>
                    <TimelineApex
                        timelinesData={timelinesData}
                        timelineSingleData={timelineSingleData}
                        setTimelineSingleData={setTimelineSingleData}
                        eventsData={eventsData}
                        setEventID={setEventID}
                    />
                    {/* <TimelineChartOneG
                        eventsData={eventsData}
                        setEventID={setEventID}
                    /> */}
                    <LineConstructor
                        setLineChartSelectedWeek={setLineChartSelectedWeek}
                    />
                    {/* <BarApex eventsData={eventsData} setEventID={setEventID} /> */}
                    {/* <DoughnutChartOne eventsData={eventsData} />
                    <BarChartOne eventsData={eventsData} />
                    <PolarAreaChartOne eventsData={eventsData} />
                    <RadarChartOne eventsData={eventsData} /> */}
                </>
            ) : null}
        </div>
    );
};

export default ChartConstructor;
