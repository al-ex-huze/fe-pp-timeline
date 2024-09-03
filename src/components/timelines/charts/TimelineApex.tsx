import "../../../styles/Timeline.css";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const TimelineApex = ({
    timelinesData,
    eventsData,
    setEventID,
    timelineSingleName,
    setTimelineSingleName,
    groupRowsState,
    groupNames,
}: {
    timelinesData: any;
    eventsData: any;
    timelineSingleData: any;
    setTimelineSingleData: any;
    setEventID: any;
    timelineSingleName: any;
    setTimelineSingleName: any;
    groupRowsState: any;
    setGroupRowsState: any;
    groupNames: any;
    setGroupNames: any;
}) => {
    // const [isExpanded, setIsExpanded] = useState(false);
    let series = [];
    let options: ApexOptions = {};
    // console.log(timelineSingleData);
    // console.log(timelinesData);
    if (timelineSingleName) {
        console.log("DEBUG");
        series = [
            ...eventsData.map((event: any) => {
                // console.log("EVENT DATA " + JSON.stringify(event))
                return {
                    name: event.title,
                    data: [
                        {
                            x: groupNames ? "all" : event.timeline, //toggle group
                            y: [
                                new Date(event.start_date).getTime(),
                                event.end_date
                                    ? new Date(event.end_date).getTime()
                                    : new Date().getTime(),
                            ],
                            ID: event.event_id,
                            Timeline: event.timeline,
                            Title: event.title,
                            Body: event.body,
                        },
                    ],
                };
            }),
        ];

        options = {
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
                    speed: 1000,
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
                    // click: function (_event, _chartContext, _opts) {
                    // },
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
                enabled: false,
                enabledOnSeries: [],
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
                    barHeight: "100%", // change as variable
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
                        w.globals.initialSeries[seriesIndex].data[
                            dataPointIndex
                        ];
                    return (
                        '<div style="color:black;padding:5px 5px 5px 5px;width:25%;">' +
                        "<span>" +
                        "<b>" +
                        data.Timeline +
                        "</b><br>" +
                        "<b>" +
                        data.Title +
                        "</b><br>" +
                        "<b>" +
                        // data.Body +
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
                position: "bottom",
                labels: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
                labels: {
                    minWidth: 40,
                },
            },
        };
    } else {
        series = [
            ...timelinesData.map((timelineDatum: any) => {
                return {
                    name: timelineDatum.timeline_name,
                    data: [
                        {
                            x: groupNames
                                ? "Timeline"
                                : timelineDatum.timeline_name,
                            y: [
                                timelineDatum.begin_date
                                    ? new Date(
                                          timelineDatum.begin_date
                                      ).getTime()
                                    : new Date().getTime(),
                                timelineDatum.finish_date
                                    ? new Date(
                                          timelineDatum.finish_date
                                      ).getTime()
                                    : new Date().getTime(),
                                // timelineDatum.begin_date
                                //     ? new Date(
                                //           timelineDatum.begin_date
                                //       ).getTime()
                                //     : new Date().getTime(),
                                // timelineDatum.finish_date
                                //     ? new Date(
                                //           timelineDatum.finish_date
                                //       ).getTime()
                                //     : new Date().getTime(),
                            ],
                            Timeline: timelineDatum.timeline_name,
                            Description: timelineDatum.description,
                        },
                    ],
                };
            }),
        ];

        options = {
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
                    // click: function (_event, _chartContext, _opts) {
                    //     toggleGroupRowsState();
                    // },
                    // click: function (_event, _chartContext, _opts) {
                    //     if (!isExpanded) {
                    //         toggleGroupRowsState();
                    //         setIsExpanded(true);
                    //     }
                    // },
                    dataPointSelection: function (_event, _chartContext, opts) {
                        // console.log(opts.w.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex].ID, "<<--");
                        // console.log(opts.series);
                        // console.log(opts.seriesIndex);
                        // console.log(opts.dataPointIndex);
                        // console.log(opts.globals.initialSeries[opts.seriesIndex].name); //events: click
                        // console.log(opts.globals.initialSeries[opts.seriesIndex].data[opts.dataPointIndex].ID); //events: click
                        // if (isExpanded) {
                        setTimelineSingleName(
                            opts.w.globals.initialSeries[opts.seriesIndex].data[
                                opts.dataPointIndex
                            ].Timeline
                        );
                        // setTimelineSingleData(
                        //     opts.w.globals.initialSeries[opts.seriesIndex]
                        //         .data[opts.dataPointIndex].Timeline
                        // );
                    },
                    // },
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
                enabledOnSeries: [],
                formatter: function (_val, opt) {
                    const data =
                        opt.w.globals.initialSeries[opt.seriesIndex].data[
                            opt.dataPointIndex
                        ];
                    return data.Timeline;
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
                        w.globals.initialSeries[seriesIndex].data[
                            dataPointIndex
                        ];
                    return (
                        '<div style="color:black;padding:5px 5px 5px 5px;width:25%;">' +
                        "<span>" +
                        "<b>" +
                        data.Timeline +
                        "</b><br>" +
                        "<b>" +
                        data.Description +
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
                position: "bottom",
                labels: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
                labels: {
                    minWidth: 40,
                },
            },
        };
    }

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
