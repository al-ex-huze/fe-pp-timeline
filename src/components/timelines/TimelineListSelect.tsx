import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTimelines } from "../../../api";

const TimelineSidebar = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState("");
    const [timelinesData, setTimelinesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelinesSidebar Use Effect()");
        getTimelines()
            .then((timelines) => {
                setTimelinesData(timelines);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleListSelect = (e: any) => {
        setSelectedValue(e.target.value);
        navigate(`/timelines/${e.target.value}`);
    };

    if (isLoading) return <p>Loading Sidebar</p>;
    return (
        <div className="Sidebar">
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
