import { Radar } from "react-chartjs-2";

const RadarChartOne = ({ eventsData }: { eventsData: any }) => {
    const radarChartOneData = {
        labels: eventsData.map((data: any) => data.title),
        datasets: [
            {
                label: eventsData[0].timeline_name,
                data: eventsData.map((data: any) => data.event_id),
                bfill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
        ],
    };

    return (
        <div className="Content__chart-container">
            Radar One {eventsData[0].event_id}
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
        </div>
    );
};

export default RadarChartOne;
