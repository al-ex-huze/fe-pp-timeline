import { useState } from "react";
import { useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { postEvent } from "../../../../api";

import ErrorComponent from "../../Error-Component";

const AddEvent = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [addEventError, setAddEventError] = useState("");
    const [eventTitleInput, setEventTitleInput] = useState("");
    const [eventBody, setEventBody] = useState("");
    const [startDateInput, setStartDateInput] = useState(new Date());
    const [endDateInput, setEndDateInput] = useState(new Date());

    const { timeline_name} = useParams();

    const handleSubmitNewEvent = (event: any) => {
        event.preventDefault();
        setIsCreating(true);
        const newEvent = {
            author: "al-ex-huze",
            timeline: timeline_name,
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
    if (timeline_name !== "Not Set") {
        return (
            <div className="Content__component">
                AddEvent
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
