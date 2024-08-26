import AddTimeline from "../timelines/AddTimeline";
import TimelineSelector from "../timelines/TimelineSelector";
import DeleteTimeline from "../timelines/DeleteTimeline";

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
            {currentTimeline.timeline_name}
            <TimelineSelector
                currentTimeline={currentTimeline}
                setCurrentTimeline={setCurrentTimeline}
            />
            <AddTimeline />
            <DeleteTimeline currentTimeline={currentTimeline} />
        </div>
    );
};

export default HomeSidebar;
