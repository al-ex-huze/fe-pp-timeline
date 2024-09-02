import { useState } from "react";

import { patchFeels } from "../../../api";

import ErrorComponent from "../Error-Component";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const updateFeels = ({ weekToPatch }: { weekToPatch: any }) => {
const UpdateFeels = () => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateFeelsError, setUpdateFeelsError] = useState("");
    const [patchWeekInput, setPatchWeekInput] = useState("");
    const [knowledgeInput, setKnowledgeInput] = useState("");
    const [experienceInput, setExperienceInput] = useState("");
    const [passionInput, setPassionInput] = useState("");
    const [enthusiasmInput, setEnthusiasmInput] = useState("");
    const [confidenceInput, setConfidenceInput] = useState("");
    const [wisdomInput, setWisdomInput] = useState("");
    const [despairInput, setDespairInput] = useState("");
    const [inputInput, setInputInput] = useState("");
    const [outputInput, setOutputInput] = useState("");

    const [showupdateFeelsToggle, setShowupdateFeelsToggle] = useState(false);

    const toggleShowupdateFeels = () => {
        setShowupdateFeelsToggle(!showupdateFeelsToggle);
    };

    const handleSubmitFeelsUpdate = (event: any) => {
        event.preventDefault();
        setIsUpdating(true);
        const update = {
            knowledge_update: Number(knowledgeInput),
            experience_update: Number(experienceInput),
            passion_update: Number(passionInput),
            enthusiasm_update: Number(enthusiasmInput),
            confidence_update: Number(confidenceInput),
            wisdom_update: Number(wisdomInput),
            despair_update: Number(despairInput),
            input_update: Number(inputInput),
            output_update: Number(outputInput),
        };
        patchFeels(update, patchWeekInput)
            .then(() => {
                setIsUpdating(false);
            })
            .catch((error: any) => {
                console.log(error);
                setUpdateFeelsError("Unsuccessful - Something Went Wrong");
            });
    };

    if (updateFeelsError) return <ErrorComponent error={updateFeelsError} />;
    if (isUpdating) return <p>Please Wait</p>;
    return (
        <div>
            <button onClick={toggleShowupdateFeels}>Update Feels</button>
            {showupdateFeelsToggle && (
                <div className="update-feels-form-container">
                    <form onSubmit={handleSubmitFeelsUpdate}>
                        <ul>
                            <li>
                                <label>
                                    <input
                                        required
                                        placeholder="w-yyyy *"
                                        value={patchWeekInput}
                                        onChange={(event) => {
                                            setPatchWeekInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Knowledge"
                                        value={knowledgeInput}
                                        onChange={(event) => {
                                            setKnowledgeInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Experience"
                                        value={experienceInput}
                                        onChange={(event) => {
                                            setExperienceInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Passion"
                                        value={passionInput}
                                        onChange={(event) => {
                                            setPassionInput(event.target.value);
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Enthusiasm"
                                        value={enthusiasmInput}
                                        onChange={(event) => {
                                            setEnthusiasmInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Confidence"
                                        value={confidenceInput}
                                        onChange={(event) => {
                                            setConfidenceInput(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Wisdom"
                                        value={wisdomInput}
                                        onChange={(event) => {
                                            setWisdomInput(event.target.value);
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Despair"
                                        value={despairInput}
                                        onChange={(event) => {
                                            setDespairInput(event.target.value);
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Input"
                                        value={inputInput}
                                        onChange={(event) => {
                                            setInputInput(event.target.value);
                                        }}
                                    />
                                </label>
                                <label>
                                    <input
                                        placeholder="Output"
                                        value={outputInput}
                                        onChange={(event) => {
                                            setOutputInput(event.target.value);
                                        }}
                                    />
                                </label>
                            </li>
                        </ul>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UpdateFeels;
