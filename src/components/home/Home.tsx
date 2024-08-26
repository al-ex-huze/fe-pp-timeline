import { useState } from "react";
import HomeSidebar from "./Home-Sidebar";
import Timelines from "../timelines/Timelines";

import "../../styles/Content.css"

const Home = () => {
    const [currentTimeline, setCurrentTimeline] = useState({});

    return (
        <>
            <div className="Sidebar">
                <HomeSidebar currentTimeline={currentTimeline} setCurrentTimeline={setCurrentTimeline} />
            </div>
            <div className="Content">
                Home Content
                <Timelines currentTimeline={currentTimeline} setCurrentTimeline={setCurrentTimeline} />
            </div>
        </>
    );
};

export default Home;
