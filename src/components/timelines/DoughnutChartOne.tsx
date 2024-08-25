import { Doughnut } from "react-chartjs-2";

const DoughnutChartOne = ({
    doughnutChartData,
    eventsData,
}: {
    doughnutChartData: any;
    eventsData: any;
}) => {

    return (
        <div className="Content__chart-container">
            Doughnut One {eventsData[0].event_id}
            <Doughnut
            data={doughnutChartData}
            options={{}}
            />
        </div>
    )
}

export default DoughnutChartOne;