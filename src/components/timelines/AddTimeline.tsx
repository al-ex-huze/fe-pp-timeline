import { useState } from "react";

import { postTimeline } from "../../../api";

import ErrorComponent from "../Error-Component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTimeline = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [addTimelineError, setAddTimelineError] = useState("");
    const [timelineNameInput, setTimelineNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [beginDateInput, setBeginDateInput] = useState(new Date());
    const [finishDateInput, setFinishDateInput] = useState(new Date());

    const [showAddTimelineToggle, setShowAddTimelineToggle] = useState(false);

    const toggleShowAddTimeline = () => {
        setShowAddTimelineToggle(!showAddTimelineToggle);
    };

    const handleSubmitNewTimeline = (event: any) => {
        event.preventDefault();
        setIsCreating(true);
        const newTimeline = {
            timeline_name: timelineNameInput,
            description: descriptionInput,
        };
        postTimeline(newTimeline)
            .then(() => {
                setTimelineNameInput("");
                setDescriptionInput("");
                setIsCreating(false);
            })
            .catch((error) => {
                console.log(error);
                setAddTimelineError("Unsuccessful - Something Went Wrong");
            });
    };

    if (addTimelineError) return <ErrorComponent error={addTimelineError} />;
    if (isCreating) return <p>Please Wait</p>;
    return (
        <div className="Content__component">
            <button onClick={toggleShowAddTimeline}>Add New Timeline</button>
            {showAddTimelineToggle && (
                <div className="Sidebar__add-timeline-form-container">
                    <form onSubmit={handleSubmitNewTimeline}>
                        <ul>
                            <li>
                                <label>
                                    <input
                                        className="Sidebar__timeline-name-input"
                                        required
                                        placeholder="Timeline Name *"
                                        value={timelineNameInput}
                                        onChange={(event) => {
                                            setTimelineNameInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        className="Sidebar__timeline-description-input"
                                        required
                                        placeholder="Description *"
                                        value={descriptionInput}
                                        onChange={(event) => {
                                            setDescriptionInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <DatePicker
                                        selected={beginDateInput}
                                        onChange={(date) =>
                                            date && setBeginDateInput(date)
                                        }
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </label>
                                <label>
                                    <DatePicker
                                        selected={finishDateInput}
                                        onChange={(date) =>
                                            date && setFinishDateInput(date)
                                        }
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </label>
                            </li>
                        </ul>
                        <button type="submit">Create</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddTimeline;
