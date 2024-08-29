// import { Chart, ReactGoogleChartEvent } from "react-google-charts";
import { Chart } from "react-google-charts";
import "../../../styles/Timeline.css";

const TimelineChartOneG = ({
    eventsData,
    setEventID,
}: {
    eventsData: any;
    setEventID: any;
}) => {
    const rowHeight = 60;
    const timelineOneColumns = [
        { type: "string", id: "ID" },
        { type: "string", id: "Name" },
        { type: "string", role: "tooltip" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
    ];

    const timelineOneRows = eventsData.map((event: any) => {
        return [
            String(event.event_id),
            event.title,
            tooltipHTML(event),
            new Date(event.start_date),
            new Date(event.end_date),
        ];
    });

    const timelineChartOneData = [timelineOneColumns, ...timelineOneRows];

    const options = {
        allowHtml: true,
        tooltip: { isHtml: true },
        legend: "LEGENENENE",
        height: timelineOneRows.length * rowHeight,
        // chartArea: {
        //     height: rowHeight,
        // },
        hAxis: {
            textStyle: { color: "#FFF" },
        },
        timeline: {
            showBarLabels: true,
            colorByRowLabel: true,
            showRowLabels: false,
            groupByRowLabel: true,
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
            '<h1>' + event.title + '</h1>' +
            '<p>' + event.body + '</p>' +
            '<p>' + event.start_date + '</p>' +
            '<p>' + event.end_date + '</p>' +
            '</div>'
        );
    }

    return (
        <div className="Timeline">
            {timelineChartOneData ? (
                <Chart
                    chartType="Timeline"
                    options={options}
                    data={timelineChartOneData}
                    width="100%"
                    chartEvents={[
                        {
                            eventName: "select",
                            callback({ chartWrapper }: any) {
                                const selectedItems = chartWrapper
                                    .getChart()
                                    .getSelection();
                                if (selectedItems.length > 0) {
                                    const selectedItem = selectedItems[0];
                                    const row = selectedItem.row;
                                    const dataPoint = timelineOneRows[row];
                                    setEventID(Number(dataPoint[0]));
                                }
                            },
                        },
                    ]}
                />
            ) : null}
        </div>
    );
};

export default TimelineChartOneG;
