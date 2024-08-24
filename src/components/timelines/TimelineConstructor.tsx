import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChartOne from "./BarChartOne";
import LineChartOne from "./LineChartOne";
import GanttChartOneG from "./GanttChartOneG";

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
        { type: "string", label: "Event Name" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
    ];
    const ganttRows = [
        [
            "Intro Week",
            "Northcoders Bootcamp",
            "test",
            new Date(2014, 9, 28),
            new Date(2015, 5, 20),
            null,
            86,
            null,
        ],
        [
            "Fundamentals",
            "Northcoders Bootcamp",
            "test",
            new Date(2014, 9, 8),
            new Date(2015, 5, 21),
            null,
            89,
            null,
        ],
    ];

    const [ganttChartData] = useState([ganttColumns, ...ganttRows]);

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
                        ganttChartData={ganttChartData}
                        eventsData={eventsData}
                    />
                </>
            ) : null}
        </div>
    );
};

export default TimelineConstructor;
