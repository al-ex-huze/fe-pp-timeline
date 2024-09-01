import Chart from "react-apexcharts";
import "../../../styles/Timeline.css";

const BarApex = ({
    // eventsData,
}: // setEventID,
{
    eventsData: any;
    setEventID: any;
}) => {
    const options = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
    };
    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ];

    return (
        <div className="mixed-chart">
            <Chart options={options} series={series} type="bar" width="500" />
        </div>
    );
};

export default BarApex;
