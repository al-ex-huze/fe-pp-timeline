import { PolarArea } from "react-chartjs-2";
import "../../../styles/Chart.css";

const RepoLanguagePolarChart = ({
    repoLanguageData,
}: {
    repoLanguageData: any;
}) => {
    console.log("repoLanguageData " + repoLanguageData);

    const polarLabels = [1,2,3]
    // repoLanguageData.map((element) => {
    //     console.log(element);
    //     for (const key in element) {
    //         return key;
    //     }
    // });

    const polarDatasetLabels = [4,5,6]
    // repoLanguageData.map((element) => {
    //     console.log(element);
    //     for (const key in element) {
    //         return element[key];
    //     }
    // });


    const polarAreaChartOneData = {
        labels: polarLabels,
        datasets: [
            {
                label: "My First Dataset",
                data: polarDatasetLabels,
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

    console.log(polarAreaChartOneData.datasets);

    return (
        <div className="Chart-3">
            {polarAreaChartOneData ? (
                <PolarArea data={polarAreaChartOneData} options={{}} />
            ) : null}
        </div>
    );
};

export default RepoLanguagePolarChart;
