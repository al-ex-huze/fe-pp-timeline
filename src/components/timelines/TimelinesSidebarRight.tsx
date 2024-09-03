import { useState } from "react";
import AddEvent from "../events/AddEvent";
import AddTimeline from "./AddTimeline";
import DeleteTimeline from "./DeleteTimeline";
import UpdateFeels from "./UpdateFeels";

const TimelineSidebar = ({
    timeline_name,
    timelineSingleData,
    lineChartSelectedWeek,
}: // setLineChartSelectedWeek,
// setTimelineSingleData,
{
    timeline_name: any;
    timelineSingleData: any;
    setTimelineSingleData: any;
    lineChartSelectedWeek: any;
    setLineChartSelectedWeek: any;
}) => {
    const [showControlPanelToggle, setShowControlPanelToggle] = useState(false);

    const toggleShowControlPanel = () => {
        setShowControlPanelToggle(!showControlPanelToggle);
    };
    return (
        <>
            SIDE BAR RIGHT
            {lineChartSelectedWeek ? (
                <UpdateFeels lineChartSelectedWeek={lineChartSelectedWeek} />
            ) : null}
            <button onClick={toggleShowControlPanel}>Control Panel</button>
            {showControlPanelToggle && (
                <>
                    <AddEvent timelineSingleData={timelineSingleData} />
                    <AddTimeline />
                    <DeleteTimeline timelineToDelete={timeline_name} />
                </>
            )}
        </>
    );
};

export default TimelineSidebar;
