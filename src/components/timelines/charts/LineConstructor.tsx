import { useEffect, useState } from "react";
// import LineChartOne from "./LineChartOne";
import { getFeels } from "../../../../api";
import LineApex from "./LineApex";

const LineConstructor = ({
    setLineChartSelectedWeek,
}: {
    setLineChartSelectedWeek: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [feelingsData, setFeelingsdata] = useState([]);

    useEffect(() => {
        console.log("LineFeelings UseEffect()");
        setIsLoading(true);
        getFeels()
            .then((feelings) => {
                setFeelingsdata(feelings);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) return <p>Loading Feelings</p>;
    return (
        <>
            <LineApex
                feelingsData={feelingsData}
                setLineChartSelectedWeek={setLineChartSelectedWeek}
            />

            {/* <LineChartOne feelingsData={feelingsData} /> */}
        </>
    );
};

export default LineConstructor;
