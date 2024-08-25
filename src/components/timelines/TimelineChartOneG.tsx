import { Chart } from "react-google-charts";
// import { GoogleChartOptions } from "react-google-charts";

const TimelineChartOneG = ({
    timelineChartData,
    eventsData,
}: {
    timelineChartData: any;
    eventsData: any;
}) => {

    return (
        <div className="Content___chart-container">
            Timeline One {eventsData[0].event_id}
            <Chart chartType="Timeline" data={timelineChartData} width="100%" height="400px" />
        </div>
    )
}

export default TimelineChartOneG;