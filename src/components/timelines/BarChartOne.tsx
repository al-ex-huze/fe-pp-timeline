import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const BarChartOne = ({ barChartData }: { barChartData: any }) => {
    return (
        <div className="chart-container">
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
                                tooltipFormat: "yyyy-MM-dd",
                                unit: "week",
                                displayFormats: {
                                    week: "yyyy-MM-dd",
                                },
                            },
                            min: "2024-03-01",
                            max: "2024-08-31",
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChartOne;
