import Timeline, {
    TimelineMarkers,
    TodayMarker,
    CustomMarker,
} from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";

import { useState } from "react";
import "./Style.css";
import ItemRender from "./ItemRender";
import keys from "./Keys";

const TimelineRC = ({ eventsData }: { eventsData: any; setEventID: any }) => {
    // const groups = eventsData.map((event: any) => {
    //     console.log(event.event_id)
    //     console.log(event.timeline)
    //     return { id: groupCounter, title: event.timeline };
    // });

    const [groupRowState, setGroupRowState] = useState(true);

    let groups: any[] = [];
    let items: any[] = [];
    const groupLookup: { [key: string]: number } = {};

    const initGroups = () => {
        if (groupRowState) {
            console.log(groupRowState);
            let groupCounter = 1;
            groups.push({ id: 0, title: eventsData[0].timeline });
            groupLookup[eventsData[0].timeline] = 0;
            for (let i = 1; i < eventsData.length; i++) {
                if (eventsData[i].timeline !== eventsData[i - 1].timeline) {
                    groupLookup[eventsData[i].timeline] = i;
                    groups.push({
                        id: groupCounter,
                        title: eventsData[i].timeline,
                    });
                }
                groupCounter++;
            }
        } else {
            let groupCounter = 0;
            for (let i = 0; i < eventsData.length; i++) {
                groupLookup[i] = eventsData[i].timeline;
                groups.push({ id: i, title: eventsData[i].timeline });
                groupCounter++;
            }
            // groups = eventsData.map((event: any) => {
            //     console.log(event.event_id);
            //     console.log(event.timeline);
            //     let groupCounter = 0;
            //     groupLookup[event.timeline] = groupCounter;
            //     return { id: groupCounter, title: event.timeline };
            // });
        }
        console.log("groupLookup " + JSON.stringify(groupLookup));
    };

    const initItems = () => {
        let counter = 0;
        items = eventsData.map(
            (event: {
                title: any;
                start_date: any;
                end_date: any;
                timeline: any;
                event_id: any;
            }) => {
                return {
                    id: event.event_id,
                    group: groupRowState
                        ? groupLookup[event.timeline as keyof object]
                        : counter++,
                    title: event.title,
                    className: "test",
                    start_time: new Date(event.start_date),
                    end_time: new Date(event.end_date),
                    canMove: false,
                    canChangeGroup: true,
                    tip: "additional information",
                    selectedBgColor: "rgba(225, 166, 244, 1)",
                };
            }
        );
    };

    initGroups();
    initItems();

    // const [yearMin, setYearMin] = useState(2024);
    // const [monthMin, setMonthMin] = useState(0);
    // const [yearMax, setYearMax] = useState(2024);
    // const [monthMax, setMonthMax] = useState(11);
    // const [hAxisMinValue, setHAxisMinValue] = useState(
    //     new Date(yearMin, monthMin, 0)
    // );
    // const [hAxisMaxValue, setHAxisMaxValue] = useState(
    //     new Date(yearMax, monthMax, 0)
    // );

    const toggleGroupByRows = () => {
        setGroupRowState(!groupRowState);
        initGroups();
        initItems();
    };

    function handleItemSelect(): void {
        // itemId: Id, e: any, time: number
        toggleGroupByRows();
    }

    // function handleItemClick(
    //     itemId: Id,
    //     e: SyntheticEvent<Element, Event>,
    //     time: number
    // ): void {
    //     throw new Error("Function not implemented.");
    // }

    return (
        <div className="Timeline">
            <Timeline
                keys={keys}
                groups={groups}
                items={items}
                defaultTimeStart={new Date(2024, 0, 0)}
                defaultTimeEnd={new Date(2024, 11, 0)}
                onItemSelect={handleItemSelect}
                // onItemClick={handleItemClick}
                sidebarContent="Classes"
                lineHeight={75}
                itemRenderer={ItemRender}
                maxZoom={1.5 * 365.24 * 86400 * 1000}
                minZoom={1.24 * 86400 * 1000 * 7 * 3}
                itemTouchSendsClick={false}
                stackItems
                itemHeightRatio={0.75}
                canMove={false}
                canResize={"both"}
                // onItemMove={this.handleItemMove}
                // onItemResize={this.handleItemResize}
            >
                <TimelineMarkers>
                    <TodayMarker date={Date.now()} />
                    <CustomMarker date={Date.now()} />
                </TimelineMarkers>
            </Timeline>

            <div className="Timeline__button-container">
                <button>Add Left</button>
                <button>Scroll Left</button>
                <button>Zoom Out</button>
                <button>Reset</button>
                <button>Zoom In</button>
                <button>Scroll Right</button>
                <button>Add Right</button>
            </div>
        </div>
    );
};

export default TimelineRC;
