import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import BarChartOne from "./BarChartOne";
import LineChartOne from "./LineChartOne";
import GanttChartOneG from "./GanttChartOneG";
import TimelineChartOneG from "./TimelineChartOneG";
import PolarAreaChartOne from "./PolarAreaChartOne";
import DoughnutChartOne from "./DoughnutChartOne";
import RadarChartOne from "./RadarChartOne";

Chart.register(CategoryScale);

const ChartConstructor = ({
    currentTimeline,
    eventsData,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
    eventsData: any;
}) => {
    return (
        <div className="constructor">
            Current Timline: {currentTimeline}
            {eventsData[0] !== undefined ? (
                <>
                    <TimelineChartOneG eventsData={eventsData} />
                    <BarChartOne eventsData={eventsData} />
                    <LineChartOne eventsData={eventsData} />
                    <PolarAreaChartOne eventsData={eventsData} />
                    <DoughnutChartOne eventsData={eventsData} />
                    <RadarChartOne eventsData={eventsData} />
                    <GanttChartOneG eventsData={eventsData} />
                </>
            ) : null}
        </div>
    );
};

export default ChartConstructor;
