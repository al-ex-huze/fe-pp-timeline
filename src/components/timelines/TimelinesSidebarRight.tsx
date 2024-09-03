import UpdateFeels from "./UpdateFeels";

const TimelineSidebar = ({
    lineChartSelectedWeek,
}: {
    lineChartSelectedWeek: any;
}) => {
    return (
        <>
            SIDE BAR RIGHT
            {lineChartSelectedWeek ? (
                <UpdateFeels lineChartSelectedWeek={lineChartSelectedWeek} />
            ) : null}
        </>
    );
};

export default TimelineSidebar;
