import AddTimeline from "../timelines/AddTimeline";
import TimelineSelector from "../timelines/TimelineSelector";

const HomeSidebar = ({
    currentTimeline,
    setCurrentTimeline,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    return (
        <div className="Sidebar">
            Home Sidebar
            <TimelineSelector
                currentTimeline={currentTimeline}
                setCurrentTimeline={setCurrentTimeline}
            />
            <AddTimeline />
        </div>
    );
};

export default HomeSidebar;
