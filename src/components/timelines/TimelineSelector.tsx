import { useEffect, useState } from "react";
import { getTimelines } from "../../../api";
import TimelineCard from "./TimelineCard";

const TimelineSelector = ({
    setCurrentTimeline,
}: {
    currentTimeline: any;
    setCurrentTimeline: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [listOfTimelines, setListOfTimelines] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        setIsLoading(true);
        console.log("TimelineSelector Use Effect()");
        getTimelines().then((timelines) => {
            setListOfTimelines(timelines);
            setIsLoading(false);
        });
    }, []);

    const handleListSelect = (e: any) => {
        setSelectedValue(e.target.value);
        setCurrentTimeline(e.target.value);
    };

    if (isLoading) return <p>Loading Timelines</p>;
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
            <ul>
                {listOfTimelines.map((timeline) => {
                    return (
                        <TimelineCard
                            timeline={timeline}
                            setCurrentTimeline={setCurrentTimeline}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default TimelineSelector;
