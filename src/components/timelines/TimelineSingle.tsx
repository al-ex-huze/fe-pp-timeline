import "../../styles/Content.css";
// import TimelineSidebar from "./TimelinesSidebar";

import TimelineSingleCard from "./TimelineSingleCard";

const Timeline = () => {

    return (
        <>
            <div className="Sidebar">
                {/* <TimelineSidebar /> */}
            </div>
            <div className="Content">
                <TimelineSingleCard />
            </div>
        </>
    );
};

export default Timeline;
