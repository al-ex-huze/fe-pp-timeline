import { useState } from "react";
import { Chart } from "react-google-charts";
import { GoogleChartOptions } from "react-google-charts";
import "../../../styles/Timeline.css";

const GanttChartOneG = ({ eventsData }: { eventsData: any }) => {
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

    const options: GoogleChartOptions = {
        backgroundColor: {
            fill: "#000D15",
        } as any,
        height: eventsData.length * 50 + 25,
        gantt: {
            trackHeight: 50,
            innerGridTrack: {
                fill: "#ffffff",
            },
            innerGridDarkTrack: {
                fill: "#ffffff",
            },
        },
    };

    return (
        <div className="Chart-Gantt">
            {ganttChartOneData ? (
                <Chart
                    chartType="Gantt"
                    data={ganttChartOneData}
                    options={options}
                    width="100%"
                    height="100%"
                    legendToggle
                />
            ) : null}
        </div>
    );
};

export default GanttChartOneG;
