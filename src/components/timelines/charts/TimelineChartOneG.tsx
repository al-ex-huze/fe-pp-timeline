import { Chart, ReactGoogleChartEvent } from "react-google-charts";
import "../../../styles/Timeline.css";

const TimelineChartOneG = ({ eventsData }: { eventsData: any }) => {
    const timelineOneColumns = [
        { type: "string", id: "Name" },
        { type: "string", id: "Name" },
        { type: "date", id: "Start" },
        { type: "date", id: "End" },
    ];

    const timelineOneRows = eventsData.map((event: any) => {
        return [
            event.title,
            event.title,
            new Date(event.start_date),
            new Date(event.end_date),
        ];
    });

    const timelineChartOneData = [timelineOneColumns, ...timelineOneRows];

    const options = {
        // allowHtml: true,
        timeline: {
            showBarLabels: true,
            colorByRowLabel: true,
            showRowLabels: false,
            groupByRowLabel: true,
            rowLabelStyle: {
                fontName: "Helvetica",
                fontSize: 24,
                color: "#603913",
            },
            barLabelStyle: { fontName: "Helvetica", fontSize: 14 },
        },
        backgroundColor: "#dddddd",
        avoidOverlappingGridLines: false,
    };

    const chartEvents: ReactGoogleChartEvent[] = [
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 1) {
              const [selectedItem] = selection;
              const dataTable = chartWrapper.getDataTable();
              const { row, column } = selectedItem;
      
              console.log("You selected:", {
                row,
                column,
                value: dataTable?.getValue(row, column),
              });
            }
          },
        },
      ];

    return (
        <div className="Timeline">
            Timeline One
            {timelineChartOneData ? (
                <Chart
                    chartType="Timeline"
                    options={options}
                    data={timelineChartOneData}
                    width="100%"
                    height="100%"
                    chartEvents={chartEvents}
                />
            ) : null}
        </div>
    );
};

export default TimelineChartOneG;
