import HomeSidebar from "./Home-Sidebar";
import Timeline from "../timeline/Timeline";

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
