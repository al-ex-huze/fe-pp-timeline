import { Chart } from "react-google-charts";

const GanttChartOneG = ({
    ganttChartData,
    eventsData,
}: {
    ganttChartData: any;
    eventsData: any;
}) => {
    const options = {
        backgroundColor: {
            fill: "#000D15",
        },
        height: 200,
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
        <div className="Content__chart-container">
            Gantt Chart One
            <Chart
                chartType="Gantt"
                data={ganttChartData}
                options={options}
                width="100%"
                height="100%"
                legendToggle
            />
        </div>
    );
};

export default GanttChartOneG;
