import "../src/styles/App.css";
import "../src/styles/Header.css";
import "../src/styles/Nav.css";
import "../src/styles/Sidebar.css";
import "../src/styles/Content.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Portfolio from "./components/portfolio/Portfolio";

function App() {

    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes> 
        </div>
    )
}

export default App;
