import axios from "axios";

const beApi = axios.create({
    baseURL: "https://be-pp-timeline.fly.dev",
});

export const getTimelines = () => {
    return beApi.get("/api/timelines").then((response) => {
        return response.data.timelines;
    });
};

export const postTimeline = (newTimeline: object) => {
    return beApi.post("/api/timelines", newTimeline).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const deleteTimelineByName = (timelineName: string) => {
    return beApi.delete(`/api/timelines/${timelineName}`).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const getEvents = (timelineFilter: string, sortByQuery: string, sortByIsAsc: boolean) => {
    let orderDirection = "";
    sortByIsAsc ? (orderDirection = "asc") : (orderDirection = "desc");
    return beApi
        .get("/api/events", {
            params: {
                topic: timelineFilter,
                sort_by: sortByQuery,
                order: orderDirection
            },
        })
        .then((response) => {
            return response.data.events;
        });
};

export const postEvent = (newEvent: object) => {
    return beApi.post("/api/events", newEvent).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const getEventByID = (eventID: number) => {
    return beApi.post("/api/events", eventID).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const deleteEventByID = (eventID: number) => {
    return beApi.delete(`/api/events/${eventID}`).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const patchEventDates = (dateUpdate: object, eventID: number) => {
    return beApi
        .delete(`/api/events/${eventID}`, dateUpdate)
        .then((response) => {
            console.log(response);
            return response.data;
        });
};

// import {
//     getTimelines,
//     postTimeline,
//     deleteTimelineByName,
//     getEvents,
//     postEvent,
//     getEventByID,
//     deleteEventByID,
//     patchEventDates,
// } from "../api.ts";

// const [isLoading, setIsLoading] = useState(true);
// const [timelines, setTimelines] = useState([]);
// const [events, setEvents] = useState([]);
// const [eventIDToDelete, setEventIDToDelete] = useState(0);

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
