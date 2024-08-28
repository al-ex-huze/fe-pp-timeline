import { useState } from "react";
import { Line } from "react-chartjs-2";

import "chartjs-adapter-date-fns";

import "../../../styles/Constructor.css";

const LineChartOne = ({ eventsData }: { eventsData: any }) => {
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
                borderWidth: 1,
            },
        ],
    });

    const [minString] = useState(String(eventsData[0].start_date));
    const [maxString] = useState(
        String(eventsData[eventsData.length - 1].end_date)
    );

    return (
        <div className="Chart-Line">
            {lineChartOneData ? (
                <Line
                    data={lineChartOneData}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: "Line Chart One",
                            },
                        },
                        elements: {
                            point: {
                                radius: 0,
                            },
                        },
                        indexAxis: "x",
                        scales: {
                            x: {
                                type: "time",
                                time: {
                                    parser: "yyyy-MM-dd",
                                    tooltipFormat: "yyyy-MM-dd",
                                    unit: "week",
                                    displayFormats: {
                                        day: "yyyy-MM-dd",
                                        week: "yyyy-MM-dd",
                                        month: "yyyy-MM-dd",
                                        year: "yyyy-MM-dd",
                                    },
                                },
                                min: minString,
                                max: maxString,
                            },
                            y: {
                                display: false,
                            },
                        },
                    }}
                />
            ) : null}
        </div>
    );
};

export default LineChartOne;
