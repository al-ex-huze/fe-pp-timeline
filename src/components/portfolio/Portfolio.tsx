import { useEffect, useState } from "react";
import PortfolioSidebar from "./Portfolio-Sidebar";
import { getEvents } from "../../../api";
import Carousel from "../carousels/Carousel";
import CarouselTextScroller from "../carousels/CarouselTextScroller";

import "../../styles/Portfolio.css";

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [projectEventsData, setProjectEventsData] = useState([]);

    const [sortByQuery] = useState("");
    const [sortByIsAsc] = useState(true);

    useEffect(() => {
        console.log("Timeline UseEffect()");
        setIsLoading(true);
        getEvents("Project", sortByQuery, sortByIsAsc)
            .then((events) => {
                console.log(events);
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
                <PortfolioSidebar />
            </div>
            <div className="Content">
                <div className="Portfolio__carousel-container">
                    <div className="Portfolio__carousel">
                        <Carousel carouselData={projectEventsData} />
                    </div>
                    <div className="Portfolio__carousel">
                        <CarouselTextScroller />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
