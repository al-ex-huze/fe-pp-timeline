import { useState } from "react";
import { useNavigate } from "react-router-dom";


const TimelineSidebar = ({
    timelinesData,
    setCurrentTimeline,
}: {
    timelinesData: any;
    setTimelinesData: any;
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate();

    const handleListSelect = (e: any) => {
        setSelectedValue(e.target.value);
        setCurrentTimeline(e.target.value);
        navigate(`/timelines/${e.target.value}`);
    };
    return (
        <div className="Sidebar">
            Timelines Sidebar
            <select value={selectedValue} onChange={(e) => handleListSelect(e)}>
                {timelinesData.map((item: any) => (
                    <option key={item.timeline_name} value={item.timeline_name}>
                        {item.timeline_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimelineSidebar;
