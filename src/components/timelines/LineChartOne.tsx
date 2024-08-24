import { useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const LineChartOne = ({
    lineChartData,
    eventsData,
}: {
    lineChartData: any;
    eventsData: any;
}) => {
    const [minString] = useState(String(eventsData[0].start_date));
    const [maxString] = useState(
        String(eventsData[eventsData.length - 1].end_date)
    );

    return (
        <div className="Content__chart-container">
            Line Chart
            <Line
                data={lineChartData}
                options={{
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
                    responsive: true,
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
        </div>
    );
};

export default LineChartOne;
