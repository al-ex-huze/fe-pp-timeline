import { useState } from "react";
import AddEvent from "../events/AddEvent";
import AddTimeline from "./AddTimeline";
import DeleteTimeline from "./DeleteTimeline";
import UpdateFeels from "./UpdateFeels";
import BarApex from "./charts/BarApex";

const TimelineSidebarRight = ({
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
            <BarApex timelineSingleData={timelineSingleData} />

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

export default TimelineSidebarRight;
