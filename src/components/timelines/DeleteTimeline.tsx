import { useState } from "react";

import { deleteTimelineByName } from "../../../api";

import ErrorComponent from "../Error-Component";

const DeleteTimeline = ({ timelineToDelete }: { timelineToDelete: any }) => {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [deleteTimelineError, setDeleteTimelineError] = useState("");

    const toggleDeleteConfirm = () => {
        setShowDeleteConfirm(!showDeleteConfirm);
    };

    const handleDeleteTimeline = () => {
        setIsDeleting(true);
        deleteTimelineByName(timelineToDelete)
            .then((confirmation) => {
                if (confirmation) {
                    setIsDeleting(false);
                    setIsDeleted(true);
                }
            })
            .catch((error) => {
                setIsDeleting(false);
                console.log(error);
                setDeleteTimelineError(
                    " Delete Unsuccessful - Something Went Wrong"
                );
            });
    };

    if (deleteTimelineError)
        return <ErrorComponent error={deleteTimelineError} />;
    if (isDeleting) return <div className="Sidebar__card">Please Wait</div>;
    if (isDeleted) return <div className="Sidebar__card">Timeline Deleted</div>;
    return (
        <div className="Content__component">
            <button onClick={toggleDeleteConfirm}>
                Delete {timelineToDelete ? timelineToDelete : <p>Timeline</p>}
            </button>
            {showDeleteConfirm && (
                <button
                    className="Content__delete-confirm-button"
                    onClick={handleDeleteTimeline}
                >
                    Confirm Delete
                </button>
            )}
        </div>
    );
};

export default DeleteTimeline;
