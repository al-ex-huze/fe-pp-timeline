import axios from "axios";

const beApi = axios.create({
    baseURL: "https://be-pp-timeline.fly.dev",
});

export const getTimelines = () => {
    return beApi.get("/api/timelines").then((response) => {
        return response.data.timelines;
    });
};

export const postTimeline = (newTimeline: any) => {
    return beApi.post("/api/timelines", newTimeline).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const deleteTimelineByName = (timelineName: any) => {
    return beApi.delete(`/api/timelines/${timelineName}`).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const getEvents = () => {
    return beApi.get("/api/events").then((response) => {
        return response.data;
    });
};

export const postEvent = (newEvent: any) => {
    return beApi.post("/api/events", newEvent).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const getEventByID = (eventID: any) => {
    return beApi.post("/api/events", eventID).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const deleteEventByID = (eventID: any) => {
    return beApi.delete(`/api/events/${eventID}`).then((response) => {
        console.log(response);
        return response.data;
    });
};

export const patchEventDates = (dateUpdate: any, eventID: any) => {
    return beApi.delete(`/api/events/${eventID}`, dateUpdate).then((response) => {
        console.log(response);
        return response.data;
    });
};