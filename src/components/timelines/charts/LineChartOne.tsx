import { useState } from "react";
import { Line } from "react-chartjs-2";

import "chartjs-adapter-date-fns";

import "../../../styles/Constructor.css";

const LineChartOne = ({ feelingsData }: { feelingsData: any }) => {
    const [lineChartOneData] = useState({
        labels: feelingsData.map((data: any) => data.week_start_date),
        datasets: [
            {
                label: "Knowledge ",
                data: feelingsData.map((data: any) => {
                    return data.knowledge;
                }),
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.2,
                borderWidth: 1,
            },
            {
                label: "Experience ",
                data: feelingsData.map((data: any) => {
                    return data.experience;
                }),
                fill: false,
                borderColor: "rgb(75, 92, 192)",
                tension: 0.2,
                borderWidth: 1,
            },
            {
                label: "Enthusiasm ",
                data: feelingsData.map((data: any) => {
                    return data.enthusiasm;
                }),
                fill: false,
                borderColor: "rgb(75, 192, 92)",
                tension: 0.2,
                borderWidth: 1,
            },
            {
                label: "Confidence ",
                data: feelingsData.map((data: any) => {
                    return data.confidence;
                }),
                fill: false,
                borderColor: "rgb(175, 192, 192)",
                tension: 0.2,
                borderWidth: 1,
            },
            {
                label: "Passion ",
                data: feelingsData.map((data: any) => {
                    return data.passion;
                }),
                fill: false,
                borderColor: "rgb(275, 292, 92)",
                tension: 0.2,
                borderWidth: 1,
            },
            {
                label: "Wisdom ",
                data: feelingsData.map((data: any) => {
                    return data.wisdom;
                }),
                fill: false,
                borderColor: "rgb(275, 92, 192)",
                tension: 0.2,
                borderWidth: 1,
            },
            {
                label: "Despair ",
                data: feelingsData.map((data: any) => {
                    return data.despair;
                }),
                fill: false,
                borderColor: "rgb(275, 192, 92)",
                tension: 0.2,
                borderWidth: 1,
            },
        ],
    });

    // const [minString] = useState(String(feelingsData[0].week_start_date));
    // const [maxString] = useState(
    //     String(feelingsData[feelingsData.length - 1].week_end_date)
    // );

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
                                min: "2024-1-1",
                                max: "2024-12-31",
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
