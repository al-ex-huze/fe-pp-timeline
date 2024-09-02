// import { PolarArea } from "react-chartjs-2";
// import "../../../styles/Chart.css";

// const RepoLanguagePolarChart = ({
//     reposDataSingleElement,
//     repoLanguageData,
// }: {
//     reposDataSingleElement: any;
//     repoLanguageData: any;
// }) => {
//     const filteredRepoLanguagesAndSize = repoLanguageData.filter(
//         (element: any) => {
//             if (
//                 element.full_name_languages === reposDataSingleElement.full_name
//             ) {
//                 return JSON.parse(element.languages_and_size);
//             }
//         }
//     );
//     if(filteredRepoLanguagesAndSize === undefined) return
//     if(filteredRepoLanguagesAndSize === null) return
//     if(filteredRepoLanguagesAndSize.length === 0) return

//     const firstInArr = filteredRepoLanguagesAndSize[0]

//     const dataObject = JSON.parse(firstInArr["languages_and_size"])

//     const polarLabels = [];
//     const polarDatasetLabels = [];
//     for (const key in dataObject) {
//         polarLabels.push(key);
//         polarDatasetLabels.push(dataObject[key]);
//     }

//     const polarAreaChartOneData = {
//         labels: polarLabels,
//         datasets: [
//             {
//                 label: "My First Dataset",
//                 data: polarDatasetLabels,
//                 backgroundColor: [
//                     "rgb(255, 99, 132)",
//                     "rgb(75, 192, 192)",
//                     "rgb(255, 205, 86)",
//                     "rgb(201, 203, 207)",
//                     "rgb(54, 162, 235)",
//                 ],
//             },
//         ],
//     };

//     return (
//         <div className="Chart-3">
//             {polarAreaChartOneData ? (
//                 <PolarArea data={polarAreaChartOneData} options={{}} />
//             ) : null}
//         </div>
//     );
// };

// export default RepoLanguagePolarChart;
