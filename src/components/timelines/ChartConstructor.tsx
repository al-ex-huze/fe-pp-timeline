import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import BarChartOne from "./charts/BarChartOne";
import LineChartOne from "./charts/LineChartOne";
import GanttChartOneG from "./charts/GanttChartOneG";
import TimelineChartOneG from "./charts/TimelineChartOneG";
import PolarAreaChartOne from "./charts/PolarAreaChartOne";
import DoughnutChartOne from "./charts/DoughnutChartOne";
import RadarChartOne from "./charts/RadarChartOne";

import "../../styles/Constructor.css";

Chart.register(CategoryScale);

const ChartConstructor = ({
    eventsData,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
    eventsData: any;
}) => {
    return (
        <div className="Constructor">
            Chart Constructor
            {eventsData[0] !== undefined ? (
                <>
                    <DoughnutChartOne eventsData={eventsData} />
                    <BarChartOne eventsData={eventsData} />
                    <PolarAreaChartOne eventsData={eventsData} />
                    <TimelineChartOneG eventsData={eventsData} />
                    <LineChartOne eventsData={eventsData} />
                    <RadarChartOne eventsData={eventsData} />
                    <GanttChartOneG eventsData={eventsData} />
                </>
            ) : null}
        </div>
    );
};

export default ChartConstructor;
