import HomeSidebar from "./Home-Sidebar";
import Timeline from "../timelines/Timelines";

const Home = () => {
    return (
        <>
            <div className="Sidebar">
                <HomeSidebar />
            </div>
            <div className="Content">Home Content
                <Timeline />
            </div>
        </>
    );
};

export default Home;
