import { useState } from "react";
import "../../styles/Content.css";
// import TimelineSidebar from "./TimelinesSidebar";

import TimelineSingleCard from "./TimelineSingleCard";
import TimelineSidebarLeft from "./TimelinesSidebarLeft";

import TimelineSidebarRight from "./TimelinesSidebarRight";
import { useParams } from "react-router-dom";

const Timeline = () => {
    const [lineChartSelectedWeek, setLineChartSelectedWeek] = useState(null);
    const [timelineSingleData, setTimelineSingleData] = useState({});
    const { timeline_name = "Northcoders Bootcamp" } = useParams();

    return (
        <>
            <div className="Sidebar-Left">
                <TimelineSidebarLeft />
            </div>
            <div className="Sidebar-Right">
                <TimelineSidebarRight
                    timeline_name={timeline_name}
                    timelineSingleData={timelineSingleData}
                    setTimelineSingleData={setTimelineSingleData}
                    setLineChartSelectedWeek
                    lineChartSelectedWeek={lineChartSelectedWeek}
                />
            </div>
            <div className="Content">
                <TimelineSingleCard
                    timeline_name={timeline_name}
                    timelineSingleData={timelineSingleData}
                    setTimelineSingleData={setTimelineSingleData}
                    setLineChartSelectedWeek={setLineChartSelectedWeek}
                />
            </div>
        </>
    );
};

export default Timeline;
