import { useEffect, useState } from "react";
import { getEvents } from "../../../../api";

import "../../../styles/Constructor.css";

import BarChartOne from "./BarChartOne";
import LineChartOne from "./LineChartOne";
import GanttChartOneG from "./GanttChartOneG";
import TimelineChartOneG from "./TimelineChartOneG";
import PolarAreaChartOne from "./PolarAreaChartOne";
import DoughnutChartOne from "./DoughnutChartOne";
import RadarChartOne from "./RadarChartOne";

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
