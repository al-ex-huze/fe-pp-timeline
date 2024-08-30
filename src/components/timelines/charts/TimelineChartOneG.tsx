// import { Chart, ReactGoogleChartEvent } from "react-google-charts";
import { useState } from "react";
import { Chart } from "react-google-charts";
import "../../../styles/Timeline.css";

const TimelineChartOneG = ({
    eventsData,
    setEventID,
}: {
    eventsData: any;
    setEventID: any;
}) => {
    const [yearMin, setYearMin] = useState(2024);
    const [monthMin, setMonthMin] = useState(0);
    const [yearMax, setYearMax] = useState(2024);
    const [monthMax, setMonthMax] = useState(11);
    const [hAxisMinValue, setHAxisMinValue] = useState(
        new Date(yearMin, monthMin, 0)
    );
    const [hAxisMaxValue, setHAxisMaxValue] = useState(
        new Date(yearMax, monthMax, 0)
    );
    const [groupRowState, setGroupRowState] = useState(true);

    const rowHeight = 60;
    const timelineOneColumns = [
        { type: "string", id: "Name" },
        { type: "string", id: "Name" },
        { type: "string", role: "tooltip" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
    ];

    const timelineOneRows = eventsData.map((event: any) => {
        return [
            event.timeline,
            event.title,
            tooltipHTML(event),
            new Date(event.start_date),
            new Date(event.end_date),
        ];
    });

    const timelineChartOneData = [timelineOneColumns, ...timelineOneRows];

    const options = {
        hAxis: {
            minValue: hAxisMinValue,
            maxValue: hAxisMaxValue,
            textStyle: { color: "#FFF" },
        },
        allowHtml: true,
        tooltip: { isHtml: true },
        legend: "Legend?!",
        height: timelineOneRows.length * rowHeight,
        // chartArea: {
        //     height: rowHeight,
        // },
        timeline: {
            showBarLabels: true,
            colorByRowLabel: false,
            showRowLabels: false,
            groupByRowLabel: groupRowState,
            rowLabelStyle: {
                fontName: "Helvetica",
                fontSize: 24,
                color: "#ffffff",
            },
            barLabelStyle: { fontName: "Helvetica", fontSize: 14 },
        },

        backgroundColor: "#ffffff",
        avoidOverlappingGridLines: false,
    };

    function tooltipHTML(event: any) {
        return (
            '<div style="color:black;padding:5px 5px 5px 5px;">' +
            "<h1>" +
            event.title +
            "</h1>" +
            "<p>" +
            event.timeline +
            "</p>" +
            "<p>" +
            event.start_date +
            "</p>" +
            "<p>" +
            event.end_date +
            "</p>" +
            "</div>"
        );
    }

    const subtractMin = () => {
        if (monthMin === 0) {
            setYearMin(yearMin - 1);
            setMonthMin(11);
        } else {
            setMonthMin(monthMin - 1);
        }
        setMinMax();
    };
    const plusMin = () => {
        if (monthMin === 11) {
            setYearMin(yearMin + 1);
            setMonthMin(0);
        } else {
            setMonthMin(monthMin + 1);
        }
        setMinMax();
    };
    const plusMax = () => {
        if (monthMax === 11) {
            setYearMax(yearMax + 1);
            setMonthMax(0);
        } else {
            setMonthMax(monthMax + 1);
        }
        setMinMax();
    };
    const subtractMax = () => {
        if (monthMax === 0) {
            console.log("UG");
            setYearMax(yearMax - 1);
            setMonthMax(11);
        } else {
            console.log("DEB");
            setMonthMax(monthMax - 1);
        }
        setMinMax();
    };
    function handleAddLeft(): void {
        subtractMin();
    }
    function handleScrollLeft(): void {
        subtractMin();
        subtractMax();
    }
    function handleZoomOut(): void {
        subtractMin();
        plusMax();
    }
    function handleZoomIn(): void {
        plusMin();
        subtractMax();
    }
    function handleScrollRight(): void {
        plusMin();
        plusMax();
    }
    function handleAddRight(): void {
        plusMax();
    }
    const handleReset = () => {
        setYearMin(2024);
        setMonthMin(0);
        setYearMax(2024);
        setMonthMax(11);
        setMinMax();
    };
    const setMinMax = () => {
        setHAxisMinValue(new Date(yearMin, monthMin, 0));
        setHAxisMaxValue(new Date(yearMax, monthMax, 0));
    };

    const toggleGroupByRows = () => {
        setGroupRowState(!groupRowState);
    };

    return 
        // <div className="Timeline">
        //     <div className="Timeline__button-container">
        //         <button onClick={handleAddLeft}>Add Left</button>
        //         <button onClick={handleScrollLeft}>Scroll Left</button>
        //         <button onClick={handleZoomOut}>Zoom Out</button>
        //         <button onClick={handleReset}>Reset</button>
        //         <button onClick={handleZoomIn}>Zoom In</button>
        //         <button onClick={handleScrollRight}>Scroll Right</button>
        //         <button onClick={handleAddRight}>Add Right</button>
        //     </div>
        //     {timelineChartOneData && hAxisMinValue && hAxisMaxValue ? (
        //         <Chart
        //             chartType="Timeline"
        //             options={options}
        //             data={timelineChartOneData}
        //             width="100%"
        //             chartEvents={[
        //                 {
        //                     eventName: "select",
        //                     callback({ chartWrapper }: any) {
        //                         toggleGroupByRows()
        //                         const selectedItems = chartWrapper
        //                             .getChart()
        //                             .getSelection();
        //                         if (selectedItems.length > 0) {
        //                             const selectedItem = selectedItems[0];
        //                             const row = selectedItem.row;
        //                             const dataPoint = timelineOneRows[row];
        //                             // setEventID(dataPoint[1]);
        //                         }
        //                     },
        //                 },
        //             ]}
        //         />
        //     ) : null}
        // </div>

};

export default TimelineChartOneG;
