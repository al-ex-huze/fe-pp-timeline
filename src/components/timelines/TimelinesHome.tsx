import { useEffect, useState } from "react";
import "../../styles/Content.css";
// import TimelineSidebar from "./TimelinesSidebar";

import TimelineSingleCard from "./TimelineSingleCard";
import TimelineSidebarLeft from "./TimelinesSidebarLeft";

import TimelineSidebarRight from "./TimelinesSidebarRight";
import { useParams } from "react-router-dom";
import { getTimelines } from "../../../api";

const TimelinesHome = () => {
    const [lineChartSelectedWeek, setLineChartSelectedWeek] = useState(null);
    const [timelinesData, setTimelinesData] = useState({});
    const [timelineSingleData, setTimelineSingleData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { timeline_name } = useParams();

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSingleCard Use Effect()");
        getTimelines().then((timelines) => {
            console.log(timelines)
            setTimelinesData(timelines);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading Timelines Home</p>;
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
                    timelinesData={timelinesData}
                    timelineSingleData={timelineSingleData}
                    setTimelineSingleData={setTimelineSingleData}
                    setLineChartSelectedWeek={setLineChartSelectedWeek}
                />
            </div>
        </>
    );
};

export default TimelinesHome;
