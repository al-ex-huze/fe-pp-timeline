// import { callback } from "chart.js/helpers";
import { Chart } from "react-google-charts";
// import { GoogleChartOptions } from "react-google-charts";

const TimelineChartOneG = ({
    timelineChartData,
    eventsData,
}: {
    timelineChartData: any;
    eventsData: any;
}) => {
    const options = {
        // allowHtml: true,
        timeline: {
            showBarLabels: true,
            colorByRowLabel: true,
            showRowLabels: true,
            groupByRowLabel: true,
            rowLabelStyle: {
                fontName: "Helvetica",
                fontSize: 24,
                color: "#603913",
            },
        },
        barLabelStyle: { fontName: "Garamond", fontSize: 14 },
        backgroundColor: "#dddddd",
        avoidOverlappingGridLines: false,
    };

    return (
        <div className="Content___chart-container">
            Timeline One {eventsData[0].event_id}
            {timelineChartData ? (
                <Chart
                    chartType="Timeline"
                    options={options}
                    data={timelineChartData}
                    width="100%"
                    height="1000px"
                />
            ) : null}
        </div>
    );
};

export default TimelineChartOneG;
