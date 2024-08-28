import { Doughnut } from "react-chartjs-2";
import "../../../styles/Chart.css";

const DoughnutChartOne = ({ eventsData }: { eventsData: any }) => {
    const doughnutChartOneData = {
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
        <div className="Chart-1">
            {doughnutChartOneData ? (
                <Doughnut data={doughnutChartOneData} options={{}} />
            ) : null}
        </div>
    );
};

export default DoughnutChartOne;
