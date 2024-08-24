import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChartOne from "./BarChartOne";
import LineChartOne from "./LineChartOne";

Chart.register(CategoryScale);

const TimelineConstructor = ({
    currentTimeline,
    setCurrentTimeline,
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
                </>
            ) : null}
        </div>
    );
};

export default TimelineConstructor;
