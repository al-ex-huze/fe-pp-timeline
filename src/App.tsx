import { useEffect, useState } from "react";
import {
    getTimelines,
    postTimeline,
    deleteTimelineByName,
    getEvents,
    postEvent,
    getEventByID,
    deleteEventByID,
    patchEventDates,
} from "../api.ts";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [timelines, setTimelines] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventIDToDelete, setEventIDToDelete] = useState(0);

    // useEffect(() => {
    //     setIsLoading(true);
    //     console.log("USEEFFECT");
    //     getEvents()
    //         .then(({ events }) => {
    //             console.log(events);
    //             setEvents(events);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    // const newTimeline = {
    //     timeline_name: "NEW TL TEST 2",
    //     descriptiion: "Test description 1",
    // };

    // const newEvent = {
    //     author: "al-ex-huze",
    //     title: "Test Title - New event",
    //     body: "Test body - one, two, three",
    //     timeline: "Northcoders Bootcamp",
    //     start_date: "2024-07-15",
    //     end_date: "2024-07-19",
    // };

    // getTimelines().then((timelines) => {
    //     console.log(timelines);
    // });

    // getEventByID(2).then((event) => {
    //     console.log(event);
    // });

    // postTimeline(newTimeline).then((timeline) => {
    // });

    // postEvent(newEvent).then((event) => {
    //     console.log(event);
    // });

    // deleteTimelineByName(oldTimelineName).then(() => {
    // });
    // const eventIDToDelete = 30;

    // const handleDeleteButton = () => {
    //     deleteEventByID().then(() => {
    //         console.log("deleted!");
    //     });
    // };

    // const datesToPatch = {
    //     new_start_date: "2024-08-01",
    //     new_end_date: "2024-08-01",
    // };
    // const eventIDToPatch = 9;

    // patchEventDates(datesToPatch, eventIDToPatch).then((event) => {
    //     console.log(event);
    // });

    if (isLoading) return <p>Loading Events</p>;
    return <></>;
}

export default App;
