import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChartOne from "./BarChartOne";

Chart.register(CategoryScale);

const TimelineConstructor = ({ eventsData } : { eventsData:any }) => {

    const [barChartOneData] = useState({
        // labels: Data.map((data) => data.year),
        labels: eventsData.map((data: any) => data.title),
        datasets: [
            {
                label: "Event ",
                data: eventsData.map((data: any) => data.event_id),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div className="constructor">
            {/* <ul>
                {eventsData.map((event: any) => {
                    return <li key={event.event_id}>{event.event_id}</li>;
                })}
            </ul> */}
            {barChartOneData ? (
                <BarChartOne chartData={barChartOneData} />
            ) : null}
        </div>
    );
};

export default TimelineConstructor;

// const data = {
//     labels: ["Red", "Orange", "Blue"],
//     // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
//     datasets: [
//         {
//             label: "Popularity of colours",
//             data: [55, 23, 96],
//             // you can set indiviual colors for each bar
//             backgroundColor: [
//                 "rgba(255, 255, 255, 0.6)",
//                 "rgba(255, 255, 255, 0.6)",
//                 "rgba(255, 255, 255, 0.6)",
//             ],
//             borderWidth: 1,
//         },
//     ],
// };
