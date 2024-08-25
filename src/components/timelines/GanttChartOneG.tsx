import { Chart } from "react-google-charts";
import { GoogleChartOptions } from "react-google-charts";

const GanttChartOneG = ({
    ganttChartData,
    eventsData,
}: {
    ganttChartData: any;
    eventsData: any;
}) => {
    const options: GoogleChartOptions = {
        backgroundColor: {
            fill: "#000D15",
        } as any,
        height: eventsData.length * 50 + 25,
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
            Gantt Chart One {eventsData[0].event_id}
            {ganttChartData ? (
                <Chart
                    chartType="Gantt"
                    data={ganttChartData}
                    options={options}
                    width="100%"
                    height="100%"
                    legendToggle
                />
            ) : null}
        </div>
    );
};

export default GanttChartOneG;
