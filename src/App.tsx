import "../src/styles/App.css";
import "../src/styles/Header.css";
import "../src/styles/Nav.css";
import "../src/styles/Sidebar.css";
import "../src/styles/Content.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/profile/Profile";
import Portfolio from "./components/portfolio/Portfolio";
import TimelineSingleCard from "./components/timelines/TimelineSingleCard";
import Timelines from "./components/timelines/Timelines";

function App() {
    const [currentTimeline, setCurrentTimeline] = useState({});
    const [timelinesData, setTimelinesData] = useState([]);

    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Timelines
                            currentTimeline={currentTimeline}
                            setCurrentTimeline={setCurrentTimeline}
                            timelinesData={timelinesData}
                            setTimelinesData={setTimelinesData}
                        />
                    }
                />
                <Route
                    path="/timelines/:timeline_name"
                    element={
                        <TimelineSingleCard
                            currentTimeline={currentTimeline}
                            setCurrentTimeline={setCurrentTimeline}
                            timelinesData={timelinesData}
                            setTimelinesData={setTimelinesData}
                        />
                    }
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    );
}

export default App;
