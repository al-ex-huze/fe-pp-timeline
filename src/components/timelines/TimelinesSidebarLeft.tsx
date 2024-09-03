import { useState } from "react";

const TimelineSidebarLeft = ({
    // timeline_name,
    // timelineSingleData,
    // lineChartSelectedWeek,
    groupRowsState,
    setGroupRowsState,
    groupNames,
    setGroupNames,
}: // setLineChartSelectedWeek,
// setTimelineSingleData,
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

    const toggleShowControlPanel = () => {
        setShowControlPanelToggle(!showControlPanelToggle);
    };

    const toggleGroupRowsState = () => {
        setGroupRowsState(!groupRowsState);
    };

    const toggleGroupNames = () => {
        setGroupNames(!groupNames);
    };
    return (
        <>
            <button onClick={toggleShowControlPanel}>Timeline Control</button>
            {showControlPanelToggle && (
                <>
                    <button onClick={toggleGroupRowsState}>Expand</button>
                    <button onClick={toggleGroupNames}>Group</button>
                </>
            )}
        </>
    );
};

export default TimelineSidebarLeft;
