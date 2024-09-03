import { Routes, Route } from "react-router-dom";

import "../src/styles/App.css";
import "../src/styles/Header.css";
import "../src/styles/Nav.css";
import "../src/styles/SidebarLeft.css";
import "../src/styles/SidebarRight.css";
import "../src/styles/Content.css";
import "../src/styles/Chart.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/profile/Profile";
import Portfolio from "./components/portfolio/Portfolio";
import TimelinesHome from "./components/timelines/TimelinesHome";

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <TimelinesHome />
                    }
                />
                <Route
                    path="/timelines/:timeline_name"
                    element={
                        <TimelinesHome />
                    }
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    );
}

export default App;
