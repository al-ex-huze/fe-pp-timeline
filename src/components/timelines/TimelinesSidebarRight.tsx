import AddEvent from "../events/AddEvent";
import AddTimeline from "./AddTimeline";
import DeleteTimeline from "./DeleteTimeline";
import UpdateFeels from "./UpdateFeels";

const TimelineSidebar = ({
    timeline_name,
    timelineSingleData,
    lineChartSelectedWeek,
    // setLineChartSelectedWeek,
    // setTimelineSingleData,
}: {
    timeline_name: any;
    timelineSingleData: any;
    setTimelineSingleData: any;
    lineChartSelectedWeek: any;
    setLineChartSelectedWeek: any;
}) => {
    return (
        <>
            SIDE BAR RIGHT
            {lineChartSelectedWeek ? (
                <UpdateFeels lineChartSelectedWeek={lineChartSelectedWeek} />
            ) : null}
            <AddEvent timelineSingleData={timelineSingleData} />
            <AddTimeline />
            <DeleteTimeline timelineToDelete={timeline_name} />
        </>
    );
};

export default TimelineSidebar;
