
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"; import { useState } from "react";
import { postEvent } from "../../../api";
import ErrorComponent from "../Error-Component";

const AddEvent = ({ currentTimeline }: { currentTimeline: any }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [addEventError, setAddEventError] = useState("");
    const [eventTitleInput, setEventTitleInput] = useState("");
    const [eventBody, setEventBody] = useState("");
    const [startDateInput, setStartDateInput] = useState(new Date());
    const [endDateInput, setEndDateInput] = useState(new Date());


    const handleSubmitNewEvent = (event: any) => {
        event.preventDefault();
        setIsCreating(true);
        const newEvent = {
            author: "al-ex-huze",
            timeline: currentTimeline.timeline_name,
            title: eventTitleInput,
            body: eventBody,
            start_date: startDateInput,
            end_date: endDateInput,
        };
        postEvent(newEvent).then(() => {
            setEventTitleInput("");
            setEventBody("");
            setIsCreating(false);
        })
            .catch((error) => {
                console.log(error)
                setAddEventError("Unsuccessful - Something Went Wrong");
            })
    }


    if (addEventError) return <ErrorComponent error={addEventError} />;
    if (isCreating) return <p>Please Wait</p>;
    if (currentTimeline.timeline_name) {
        return (
            <div className="Content__component">
                Add Event
                <div className="Content__add-event-form-container">
                    <form onSubmit={handleSubmitNewEvent}>
                        <ul>
                            <li>
                                <label>
                                    <input
                                        className="Sidebar__event-title-input"
                                        required
                                        placeholder="Event *"
                                        value={eventTitleInput}
                                        onChange={(event) => {
                                            setEventTitleInput(event.target.value);
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        className="Sidebar__event-body-input"
                                        required
                                        placeholder="Description *"
                                        value={eventBody}
                                        onChange={(event) => {
                                            setEventBody(event.target.value);
                                        }}
                                    />
                                </label>
                                <label>
                                    <DatePicker selected={startDateInput} onChange={date => date && setStartDateInput(date)} />
                                </label>
                                <label>
                                    <DatePicker selected={endDateInput} onChange={date => date && setEndDateInput(date)} />
                                </label>
                            </li>
                        </ul>
                        <button type="submit">Add Event</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default AddEvent;
