import { useState } from "react";

import { patchFeels } from "../../../api";

import ErrorComponent from "../Error-Component";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Slider } from "@mui/material";

// const updateFeels = ({ weekToPatch }: { weekToPatch: any }) => {
const UpdateFeels = ({
    lineChartSelectedWeek,
}: {
    lineChartSelectedWeek: any;
}) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateFeelsError, setUpdateFeelsError] = useState("");
    // const [patchWeekInput, setPatchWeekInput] = useState();
    const [knowledgeInput, setKnowledgeInput] = useState(
        lineChartSelectedWeek.selectedKnowledgeValue
    );
    const [experienceInput, setExperienceInput] = useState(
        lineChartSelectedWeek.selectedExperienceValue
    );
    const [passionInput, setPassionInput] = useState(
        lineChartSelectedWeek.selectedPassionValue
    );
    const [enthusiasmInput, setEnthusiasmInput] = useState(
        lineChartSelectedWeek.selectedEnthusiasmValue
    );
    const [confidenceInput, setConfidenceInput] = useState(
        lineChartSelectedWeek.selectedConfidenceValue
    );
    const [wisdomInput, setWisdomInput] = useState(
        lineChartSelectedWeek.selectedWisdomValue
    );
    const [despairInput, setDespairInput] = useState(
        lineChartSelectedWeek.selectedDespairValue
    );
    const [inputInput, setInputInput] = useState(
        lineChartSelectedWeek.selectedInputValue
    );
    const [outputInput, setOutputInput] = useState(
        lineChartSelectedWeek.selectedOutputValue
    );

    // const [showupdateFeelsToggle, setShowupdateFeelsToggle] = useState(false);

    // const toggleShowupdateFeels = () => {
    //     setShowupdateFeelsToggle(!showupdateFeelsToggle);
    // };

    const handleSubmitFeelsUpdate = (event: any) => {
        event.preventDefault();
        setIsUpdating(true);
        const patchWeekInput = lineChartSelectedWeek.selectedWeekNumber;
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
        patchFeels(update, patchWeekInput!)
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
            {/* <button onClick={toggleShowupdateFeels}>Update Feels</button>
            {showupdateFeelsToggle && ( */}
            <div className="update-feels-form-container">
                <form onSubmit={handleSubmitFeelsUpdate}>
                    <label>
                        <h1>{lineChartSelectedWeek.selectedWeekNumber}</h1>
                    </label>
                    <label>
                        Knowledge
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedKnowledgeValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedKnowledgeValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setKnowledgeInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Knowledge"
                                        value={knowledgeInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setKnowledgeInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Experience
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedExperienceValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedExperienceValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setExperienceInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Experience"
                                        value={experienceInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setExperienceInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Passion
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedPassionValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedPassionValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setPassionInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Passion"
                                        value={passionInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setPassionInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Enthusiasm
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedEnthusiasmValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedEnthusiasmValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setEnthusiasmInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Enthusiasm"
                                        value={enthusiasmInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setEnthusiasmInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Confidence
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedConfidenceValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedConfidenceValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setConfidenceInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Confidence"
                                        value={confidenceInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setConfidenceInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Wisdom
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedWisdomValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedWisdomValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setWisdomInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Wisdom"
                                        value={wisdomInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setWisdomInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Despair
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedDespairValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedDespairValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setDespairInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Despair"
                                        value={despairInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setDespairInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Input
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedInputValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedInputValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setInputInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Input"
                                        value={inputInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setInputInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    <label>
                        Output
                        <Slider
                            size="small"
                            key={`slider-${lineChartSelectedWeek.selectedOutputValue}`}
                            defaultValue={
                                lineChartSelectedWeek.selectedOutputValue
                            }
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={(event) => {
                                const inputTarget =
                                    event.target as HTMLInputElement;
                                setOutputInput(Number(inputTarget.value));
                            }}
                        />
                    </label>
                    {/* <label>
                                    <input
                                        placeholder="Output"
                                        value={outputInput}
                                        onChange={(event) => {
                                            const inputTarget =
                                                event.target as HTMLInputElement;
                                            setOutputInput(
                                                Number(inputTarget.value)
                                            );
                                        }}
                                    />
                                </label> */}
                    {/* </li>
                        </ul> */}
                    <button type="submit">Update</button>
                </form>
            </div>
            {/* )} */}
        </div>
    );
};

export default UpdateFeels;
