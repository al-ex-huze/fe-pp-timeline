import "../../styles/Content.css";

import TimelineSelector from "./TimelineSelector";
import TimelineSidebar from "./TimelinesSidebar";

const TimelinesHome = () => {
    return (
        <>
            TimelinesHome
            <div className="Sidebar">
                <TimelineSidebar />
            </div>
            <div className="Content">
                <TimelineSelector />
            </div>
        </>
    );
};

export default TimelinesHome;
