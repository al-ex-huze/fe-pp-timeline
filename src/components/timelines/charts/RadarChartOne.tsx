import { Radar } from "react-chartjs-2";
import "../../../styles/Chart.css";

const RadarChartOne = ({ eventsData }: { eventsData: any }) => {
    const radarChartOneData = {
        labels: eventsData.map((data: any) => data.title),
        datasets: [
            {
                label: eventsData[0].timeline_name,
                data: eventsData.map((data: any) => data.event_id),
                bfill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
            },
        ],
    };

    return (
        <div className="Chart-4">
            Radar Chart
            {radarChartOneData ? (
                <Radar
                    data={radarChartOneData}
                    options={{
                        elements: {
                            line: {
                                borderWidth: 1,
                            },
                        },
                    }}
                />
            ) : null}
        </div>
    );
};

export default RadarChartOne;
