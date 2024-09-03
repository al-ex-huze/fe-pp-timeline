import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "../../../styles/Timeline.css";

const LineApex = ({
    feelingsData,
    setLineChartSelectedWeek,
}: {
    feelingsData: any;
    setLineChartSelectedWeek: any;
}) => {
    const series = [
        {
            name: "Knowledge ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.knowledge,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Experience ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.experience,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Enthusiasm ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.enthusiasm,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Confidence ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.confidence,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Passion ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.passion,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Wisdom ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.wisdom,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Despair ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.despair,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Input ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.input,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
        {
            name: "Output ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.output,
                    x: new Date(data.week_start_date).getTime(),
                    weekNumber: data.week_number,
                };
            }),
        },
    ];

    const options: ApexOptions = {
        chart: {
            // id: "chart-line",
            // group: "social",
            background: "transparent",
            height: 350,
            type: "line",
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
                click: function (_event, _chartContext, opts) {
                    // console.log(opts);
                    // console.log(opts.seriesIndex);
                    // console.log(opts.dataPointIndex);
                    // console.log(opts.globals.initialSeries[opts.seriesIndex]);
                    // console.log(
                    //     opts.globals.initialSeries[opts.seriesIndex].data[
                    //         opts.dataPointIndex
                    //     ]
                    // );
                    // console.log(opts.globals);
                    // console.log(
                    //     opts.globals.initialSeries[1].data[opts.dataPointIndex]
                    //         .y,
                    //     "<<<---"
                    // );
                    setLineChartSelectedWeek({
                        selectedWeekNumber:
                            opts.globals.initialSeries[opts.seriesIndex].data[
                                opts.dataPointIndex
                            ].weekNumber,
                        selectedKnowledgeValue:
                            opts.globals.initialSeries[0].data[
                                opts.dataPointIndex
                            ].y,
                        selectedExperienceValue:
                            opts.globals.initialSeries[1].data[
                                opts.dataPointIndex
                            ].y,
                        selectedEnthusiasmValue:
                            opts.globals.initialSeries[2].data[
                                opts.dataPointIndex
                            ].y,
                        selectedConfidenceValue:
                            opts.globals.initialSeries[3].data[
                                opts.dataPointIndex
                            ].y,
                        selectedPassionValue:
                            opts.globals.initialSeries[4].data[
                                opts.dataPointIndex
                            ].y,
                        selectedWisdomValue:
                            opts.globals.initialSeries[5].data[
                                opts.dataPointIndex
                            ].y,
                        selectedDespairValue:
                            opts.globals.initialSeries[6].data[
                                opts.dataPointIndex
                            ].y,
                        selectedInputValue:
                            opts.globals.initialSeries[7].data[
                                opts.dataPointIndex
                            ].y,
                        selectedOutputValue:
                            opts.globals.initialSeries[8].data[
                                opts.dataPointIndex
                            ].y,
                    });
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        legend: {
            show: false,
        },
        stroke: {
            curve: "smooth",
            width: 1,
        },
        theme: { mode: "dark" },
        title: {
            text: "Feelings 2024",
            align: "left",
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            hideEmptySeries: true,
            fillSeriesColor: false,
            theme: "dark",
            style: {
                fontSize: "12px",
                fontFamily: undefined,
            },
            onDatasetHover: {
                highlightDataSeries: false,
            },
            x: {
                show: true,
                format: "dd MMM",
                formatter: undefined,
            },
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
            z: {
                formatter: undefined,
                title: "Size: ",
            },
            marker: {
                show: true,
            },
            // items: {
            //     display: flex,
            // },
            fixed: {
                enabled: true,
                position: "topRight",
                offsetX: 0,
                offsetY: 0,
            },
        },
        xaxis: {
            type: "datetime",
            min: new Date(2024, 0, 0).getTime(),
            max: new Date(2024, 11, 0).getTime(),
            categories: [],
            tickAmount: undefined,
            tickPlacement: "between",
            stepSize: undefined,
            range: undefined,
            floating: false,
            decimalsInFloat: undefined,
            overwriteCategories: undefined,
            position: "bottom",
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: false,
                minHeight: undefined,
                maxHeight: 120,
                style: {
                    colors: [],
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-xaxis-label",
                },
                offsetX: 0,
                offsetY: 2,
                format: undefined,
                formatter: undefined,
                datetimeUTC: true,
                datetimeFormatter: {
                    year: "yyyy",
                    month: "MMM 'yy",
                    day: "dd MMM",
                    hour: "HH:mm",
                    minute: "HH:mm:ss",
                    second: "HH:mm:ss",
                },
            },
        },
        yaxis: {
            show: false,
            labels: {
                minWidth: 40,
            },
        },
    };

    return (
        // <div className="Chart-Line" id="chart-line">
        <div className="Chart-Line">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={300}
            />
        </div>
    );
};

export default LineApex;
