import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "../../../styles/Timeline.css";

const LineApex = ({ feelingsData }: { feelingsData: any }) => {
    const series = [
        {
            name: "Knowledge ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.knowledge,
                    x: new Date(data.week_start_date).getTime(),
                };
            }),
        },
        {
            name: "Experience ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.experience,
                    x: new Date(data.week_start_date).getTime(),
                };
            }),
        },
        {
            name: "Enthusiasm ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.enthusiasm,
                    x: new Date(data.week_start_date).getTime(),
                };
            }),
        },
        {
            name: "Confidence ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.confidence,
                    x: new Date(data.week_start_date).getTime(),
                };
            }),
        },
        {
            name: "Passion ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.passion,
                    x: new Date(data.week_start_date).getTime(),
                };
            }),
        },
        {
            name: "Wisdom ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.wisdom,
                    x: new Date(data.week_start_date).getTime(),
                };
            }),
        },
        {
            name: "Despair ",
            data: feelingsData.map((data: any) => {
                return {
                    y: data.despair,
                    x: new Date(data.week_start_date).getTime(),
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
            // events: {
            //     click: function (event, chartContext, opts) {
            //         console.log("The last parameter opts contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts")
            //     },
            // },
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
