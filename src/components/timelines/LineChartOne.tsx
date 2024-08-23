import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

const LineChartOne = ({ lineChartData }: { lineChartData: any }) => {
    return (
        <div className="chart-container">
            Line Chart
            <Line data={lineChartData} 
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Line Chart One",
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
                                week: "yyyy-MM-dd",
                            },
                        },
                        min: "2024-03-01",
                        max: "2024-08-31",
                    },
                },
            }}/>
        </div>
    );
};

export default LineChartOne;
