import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const BarChartOne = ({
    barChartData,
    eventsData,
}: {
    barChartData: any;
    eventsData: any;
}) => {
    const [minString] = useState(String(eventsData[0].start_date));
    const [maxString] = useState(String(eventsData[eventsData.length - 1].end_date));

    return (
        <div className="Content__chart-container">
            Bar Chart
            <Bar
                data={barChartData}
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
        </div>
    );
};

export default BarChartOne;
