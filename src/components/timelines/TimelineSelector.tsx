import { useEffect, useState } from "react";
import { getTimelines } from "../../../api";

const TimelineSelector = ({
    setCurrentTimeline,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [listOfTimelines, setListOfTimelines] = useState([]);

    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        console.log("TimelineSelector Use Effect()");
        getTimelines().then((timelines) => {
            setListOfTimelines(timelines);
        });
    }, []);

    const handleListSelect = (e: any) => {
        setSelectedValue(e.target.value);
        setCurrentTimeline(e.target.value);
    };

    return (
        <div className="Sidebar__component">
            Timeline Selector
            <select value={selectedValue} onChange={(e) => handleListSelect(e)}>
                {listOfTimelines.map((item: any) => (
                    <option key={item.timeline_name} value={item.timeline_name}>
                        {item.timeline_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimelineSelector;
