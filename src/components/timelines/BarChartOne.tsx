import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const BarChartOne = ({ eventsData }: { eventsData: any }) => {
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
    const [minString] = useState(String(eventsData[0].start_date));
    const [maxString] = useState(
        String(eventsData[eventsData.length - 1].end_date)
    );

    return (
        <div className="Content__chart-container">
            Bar Chart
            {barChartOneData ? (
                <Bar
                    data={barChartOneData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Bar Chart One",
                            },
                        },
                        indexAxis: "y",
                        responsive: true,
                        scales: {
                            x: {
                                type: "time",
                                time: {
                                    parser: "yyyy-MM-dd",
                                    unit: "week",
                                    displayFormats: {
                                        day: "yyyy-MM-dd",
                                        week: "yyyy-MM-dd",
                                        month: "yyyy-MM-dd",
                                        year: "yyyy-MM-dd",
                                    },
                                    tooltipFormat: "DD-MM-YYYY",
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

export default BarChartOne;
