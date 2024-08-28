import { PolarArea } from "react-chartjs-2";
import "../../../styles/Chart.css";

const PolarAreaChartOne = ({ eventsData }: { eventsData: any }) => {
    const polarAreaChartOneData = {
        labels: eventsData.map((data: any) => data.title),
        datasets: [
            {
                label: "My First Dataset",
                data: eventsData.map((data: any) => data.event_id),
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)",
                ],
            },
        ],
    };

    return (
        <div className="Chart-3">
            {polarAreaChartOneData ? (
                <PolarArea data={polarAreaChartOneData} options={{}} />
            ) : null}
        </div>
    );
};

export default PolarAreaChartOne;
