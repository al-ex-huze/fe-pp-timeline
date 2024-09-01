import "../../../styles/Timeline.css";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

const TimelineApex = ({
    eventsData,
    setEventID,
}: {
    eventsData: any;
    setEventID: any;
}) => {
    const [groupRowsState, setGroupRowsState] = useState(true);
    const toggleGroupRowsState = () => {
        setGroupRowsState(!groupRowsState);
    };

    const series = [
        {
            name: "Northcoders Bootcamp",
            data: [
                {
                    x: "Northcoders Bootcamp",
                    y: [
                        new Date(eventsData[0].start_date).getTime(),
                        new Date(eventsData[4].end_date).getTime(),
                    ],
                    ID: "ID",
                    Title: eventsData[0].timeline,
                    Body: "body",
                },
            ],
        },
        ...eventsData.map((event: any) => {
            return {
                name: event.title,
                data: [
                    {
                        x: event.timeline,
                        y: [
                            new Date(event.start_date).getTime(),
                            new Date(event.end_date).getTime(),
                        ],
                        ID: event.event_id,
                        Title: event.title,
                        Body: event.body,
                    },
                ],
            };
        }),
    ];

    const options: ApexOptions = {
        chart: {
            // id: "chart-timeline",
            // group: "social",
            height: 350,
            type: "rangeBar",
            zoom: {
                enabled: false,
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                },
            },
            events: {
                click: function (_event, _chartContext, _opts) {
                    toggleGroupRowsState();
                },
                dataPointSelection: function (_event, _chartContext, opts) {
                    // console.log(opts.w.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex].ID, "<<--");
                    // console.log(opts.series);
                    // console.log(opts.seriesIndex);
                    // console.log(opts.dataPointIndex);
                    // console.log(opts.globals.initialSeries[opts.seriesIndex].name); //events: click
                    // console.log(opts.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex].ID); //events: click
                    setEventID(
                        opts.w.globals.initialSeries[opts.seriesIndex].data[
                            opts.dataPointIndex
                        ].ID
                    );
                },
            },
        },
        colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#3F51B5",
            "#546E7A",
            "#D4526E",
            "#8D5B4C",
            "#F86624",
            "#D7263D",
            "#1B998B",
            "#2E294E",
            "#F46036",
            "#E2C044",
        ],
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            formatter: function (_val, opt) {
                const data =
                    opt.w.globals.initialSeries[opt.seriesIndex].data[
                        opt.dataPointIndex
                    ];
                return data.Title;
            },
            textAnchor: "start", // change on toggle
            distributed: false,
            offsetX: 20, // change on toggle
            offsetY: 0,
            style: {
                fontSize: "14px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: "bold",
                colors: undefined,
            },
            background: {
                enabled: true,
                foreColor: "#fff",
                padding: 4,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: "#fff",
                opacity: 0.9,
                dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: "#000",
                    opacity: 0.45,
                },
            },
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: "#000",
                opacity: 0.45,
            },
        },
        fill: {
            type: "solid",
        },
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "50%", // change as variable
                rangeBarGroupRows: groupRowsState, // change as variable
                distributed: false,
                dataLabels: {
                    position: "top",
                    maxItems: 100,
                    hideOverflowingLabels: false,
                    total: {
                        enabled: false,
                        formatter: undefined,
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            color: "#373d3f",
                            fontSize: "12px",
                            fontFamily: undefined,
                            fontWeight: 600,
                        },
                    },
                },
            },
        },
        tooltip: {
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const data =
                    w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                return (
                    '<div style="color:black;padding:5px 5px 5px 5px;">' +
                    "<span>" +
                    "<b>" +
                    data.Title +
                    "</b><br>" +
                    "<b>" +
                    data.Body +
                    "</b>" +
                    "</span>" +
                    "</div>"
                );
            },
        },
        xaxis: {
            type: "datetime",
            min: new Date(2024, 0, 0).getTime(),
            max: new Date(2024, 11, 0).getTime(),
        },
        yaxis: {
            show: false,
            labels: {
                minWidth: 40,
            },
        },
    };

    return (
        // <div className="Timeline" id="chart-timeline">
        <div className="Timeline">
            <ReactApexChart
                options={options}
                series={series}
                type="rangeBar"
                height={350}
            />
        </div>
    );
};

export default TimelineApex;
