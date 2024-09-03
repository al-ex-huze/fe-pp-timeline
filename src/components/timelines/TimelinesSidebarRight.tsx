import { useState } from "react";
import AddEvent from "../events/AddEvent";
import AddTimeline from "./AddTimeline";
import DeleteTimeline from "./DeleteTimeline";
import UpdateFeels from "./UpdateFeels";

const TimelineSidebarRight = ({
    timeline_name,
    timelineSingleData,
    lineChartSelectedWeek,
    groupRowsState,
    setGroupRowsState,
    groupNames,
    setGroupNames,
    setLineChartSelectedWeek
}:
{
    timeline_name: any;
    timelineSingleData: any;
    setTimelineSingleData: any;
    lineChartSelectedWeek: any;
    setLineChartSelectedWeek: any;
    groupRowsState: any;
    setGroupRowsState: any;
    groupNames: any;
    setGroupNames: any;
}) => {
    const [showControlPanelToggle, setShowControlPanelToggle] = useState(false);
    const [showTimelineControlToggle, setShowTimelineControlToggle] =
        useState(false);

    const toggleShowTimelineControl = () => {
        setShowTimelineControlToggle(!showTimelineControlToggle);
    };

    const toggleGroupRowsState = () => {
        setGroupRowsState(!groupRowsState);
    };

    const toggleGroupNames = () => {
        setGroupNames(!groupNames);
    };
    const toggleShowControlPanel = () => {
        setShowControlPanelToggle(!showControlPanelToggle);
    };
    return (
        <>
            {lineChartSelectedWeek ? (
                <UpdateFeels lineChartSelectedWeek={lineChartSelectedWeek} setLineChartSelectedWeek={setLineChartSelectedWeek} />
            ) : null}
            <button onClick={toggleShowTimelineControl}>
                        Timeline Control
                    </button>
            {showTimelineControlToggle && (
                <>
                    <button onClick={toggleGroupRowsState}>Expand</button>
                    <button onClick={toggleGroupNames}>Group</button>
                </>
            )}
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
