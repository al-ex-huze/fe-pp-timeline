import { useEffect, useState } from "react";
// import PortfolioSidebar from "./Portfolio-Sidebar";
import { getEvents } from "../../../api";
import Carousel from "../carousels/Carousel";
import TextScrollerPortfolio from "../carousels/TextScrollerPortfolio";

import "../../styles/Portfolio.css";

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [projectEventsData, setProjectEventsData] = useState([]);
    const [projectEventID, setProjectEventID] = useState(null)

    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    

    useEffect(() => {
        console.log("Portfolio UseEffect()");
        setIsLoading(true);
        getEvents("Project", sortByQuery, sortByIsAsc)
            .then((events) => {
                setProjectEventsData(events);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) return <p>Loading Data</p>;
    return (
        <>
            <div className="Sidebar">
                {/* <PortfolioSidebar /> */}
            </div>
            <div className="Content">
                <div className="Portfolio__carousel-container">
                    <div className="Portfolio__carousel">
                        <Carousel carouselData={projectEventsData} setProjectEventID={setProjectEventID} />
                    </div>
                    <div className="Portfolio__carousel">
                        <TextScrollerPortfolio projectEventID={projectEventID}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
