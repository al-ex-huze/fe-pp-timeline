import { PolarArea } from "react-chartjs-2";

const PolarAreaChartOne = ({
    polarAreaChartData,
    eventsData,
}: {
    polarAreaChartData: any;
    eventsData: any;
}) => {

    return (
        <div className="Content__chart-container">
            Polar Chart One {eventsData[0].event_id}
            <PolarArea
            data={polarAreaChartData}
            options={{}}
            />
        </div>
    )
}

export default PolarAreaChartOne;