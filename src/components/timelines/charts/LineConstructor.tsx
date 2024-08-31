import { useEffect, useState } from "react";
import LineChartOne from "./LineChartOne";
import { getFeelings } from "../../../../api";

const LineConstructor = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [feelingsData, setFeelingsdata] = useState([]);

    useEffect(() => {
        console.log("LineFeelings UseEffect()");
        setIsLoading(true);
        getFeelings()
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
            LineConstructor
                <LineChartOne feelingsData={feelingsData} />
        </>
    );
};

export default LineConstructor;
