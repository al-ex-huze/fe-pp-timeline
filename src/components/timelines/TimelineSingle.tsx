import { useState } from "react";
import "../../styles/Content.css";
// import TimelineSidebar from "./TimelinesSidebar";

import TimelineSingleCard from "./TimelineSingleCard";
import TimelineSidebarLeft from "./TimelinesSidebarLeft";

import TimelineSidebarRight from "./TimelinesSidebarRight";

const Timeline = () => {
    const [lineChartSelectedWeek, setLineChartSelectedWeek] = useState(null)
    
    return (
        <>
            <div className="Sidebar-Left">
                <TimelineSidebarLeft />
            </div>
            <div className="Sidebar-Right">
                <TimelineSidebarRight lineChartSelectedWeek={lineChartSelectedWeek} />
            </div>
            <div className="Content">
                <TimelineSingleCard setLineChartSelectedWeek={setLineChartSelectedWeek} />
            </div>
        </>
    );
};

export default Timeline;
