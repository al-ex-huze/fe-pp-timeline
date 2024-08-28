import { useEffect, useState } from "react";
import { getEvents } from "../../../api";

import "../../styles/Constructor.css";

import BarChartOne from "./charts/BarChartOne";
import LineChartOne from "./charts/LineChartOne";
import GanttChartOneG from "./charts/GanttChartOneG";
import TimelineChartOneG from "./charts/TimelineChartOneG";
import PolarAreaChartOne from "./charts/PolarAreaChartOne";
import DoughnutChartOne from "./charts/DoughnutChartOne";
import RadarChartOne from "./charts/RadarChartOne";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

const ChartConstructor = ({
    timelineSingleData,
}: {
    timelineSingleData: any;
    setTimelineSingleData: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState([]);

    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    useEffect(() => {
        console.log("Timeline UseEffect()");
        setIsLoading(true);
        getEvents(timelineSingleData.timeline_name, sortByQuery, sortByIsAsc).then((events) => {
            setEventsData(events);
            setIsLoading(false);
        });
    }, [timelineSingleData.timeline_name, sortByQuery, sortByIsAsc]);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <div className="Constructor">
            ChartConstructor
            {eventsData[0] !== undefined ? (
                <>
                    <DoughnutChartOne eventsData={eventsData} />
                    <BarChartOne eventsData={eventsData} />
                    <PolarAreaChartOne eventsData={eventsData} />
                    <TimelineChartOneG eventsData={eventsData} />
                    <LineChartOne eventsData={eventsData} />
                    <RadarChartOne eventsData={eventsData} />
                    <GanttChartOneG eventsData={eventsData} />
                </>
            ) : null}
        </div>
    );
};

export default ChartConstructor;
