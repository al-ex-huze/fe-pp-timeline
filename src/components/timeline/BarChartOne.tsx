import { Bar } from "react-chartjs-2";

const BarChartOne = ({ chartData } : {chartData: any }) => {
    return (
        <div className="chart-container">
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Bar Chart One",
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChartOne;