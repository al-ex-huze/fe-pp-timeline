import UpdateFeels from "./UpdateFeels";

const TimelineSidebar = ({
    lineChartSelectedWeek,
}: {
    lineChartSelectedWeek: any;
}) => {
    return (
        <>
            SIDE BAR RIGHT
            <UpdateFeels lineChartSelectedWeek={lineChartSelectedWeek} />
        </>
    );
};

export default TimelineSidebar;
