import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChartOne from "./BarChartOne";
import LineChartOne from "./LineChartOne";
import GanttChartOneG from "./GanttChartOneG";
import TimelineChartOneG from "./TimelineChartOneG";

Chart.register(CategoryScale);

const TimelineConstructor = ({
    currentTimeline,
    eventsData,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
    eventsData: any;
}) => {
    const [barChartOneData] = useState({
        labels: eventsData.map((data: any) => data.title),
        datasets: [
            {
                label: "Event ",
                data: eventsData.map((data: any) => {
                    return [data.start_date, data.end_date];
                }),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 205, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const [lineChartOneData] = useState({
        labels: eventsData.map((data: any) => data.start_date),
        datasets: [
            {
                label: "Knowledge ",
                data: eventsData.map((data: any) => {
                    return data.event_id;
                }),
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.2,
            },
        ],
    });

    const ganttColumns = [
        { type: "string", label: "Event ID" },
        { type: "string", label: "Event" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
        { type: "string", label: "Timeline" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Created" },
    ];

    const ganttRows = eventsData.map((event: any) => {
        return [
            event.event_id,
            event.title,
            new Date(event.start_date),
            new Date(event.end_date),
            null,
            86,
            null,
            event.timeline_name,
            event.body,
            new Date(event.created_at),
        ];
    });

    const [ganttChartOneData] = useState([ganttColumns, ...ganttRows]);

    const timelineOneColumns = [
        { type: "string", id: "Name" },
        { type: "string", id: "Name" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
    ];

    const timelineOneRows = eventsData.map((event: any) => {
        return [
            event.title,
            event.title,
            new Date(event.start_date),
            new Date(event.end_date),
        ];
    });

    const timelineChartOneData = [timelineOneColumns, ...timelineOneRows];

    return (
        <div className="constructor">
            Current Timline: {currentTimeline}
            {eventsData[0] !== undefined ? (
                <>
                    <BarChartOne
                        barChartData={barChartOneData}
                        eventsData={eventsData}
                    />
                    <LineChartOne
                        lineChartData={lineChartOneData}
                        eventsData={eventsData}
                    />
                    <GanttChartOneG
                        ganttChartData={ganttChartOneData}
                        eventsData={eventsData}
                    />
                    <TimelineChartOneG
                        timelineChartData={timelineChartOneData}
                        eventsData={eventsData}
                    />
                </>
            ) : null}
        </div>
    );
};

export default TimelineConstructor;
