import { useState } from "react";
import { postTimeline } from "../../../api";
import ErrorComponent from "../Error-Component";

const AddTimeline = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [addTimelineError, setAddTimelineError] = useState("");
    const [timelineNameInput, setTimelineNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    const handleSubmitNewTimeline = (event: any) => {
        event.preventDefault();
        setIsCreating(true);
        const newTimeline = {
            timeline_name: timelineNameInput,
            description: descriptionInput,
        };
        postTimeline(newTimeline).then(() => {
            setTimelineNameInput("");
            setDescriptionInput("");
            setIsCreating(false);
        })
        .catch((error) => {
            console.log(error)
            setAddTimelineError("Unsuccessful - Something Went Wrong");
        })
    }

    if (addTimelineError) return <ErrorComponent error={addTimelineError} />;
    if (isCreating) return <p>Please Wait</p>;
    return (
        <div className="Sidebar__component">
            Add Timeline
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
                                        setTimelineNameInput(event.target.value);
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
                                        setDescriptionInput(event.target.value);
                                    }}
                                />
                            </label>                            
                        </li>
                    </ul>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default AddTimeline;
