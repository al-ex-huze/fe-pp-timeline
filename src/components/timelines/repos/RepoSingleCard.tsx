import { useState } from "react";

import RepoLanguagePolarChart from "./RepoLanguagePolarChart";

const RepoSingleCard = ({
    reposDataSingleElement,
    repoLanguageData,
}: {
    reposDataSingleElement: any;
    repoLanguageData: any;
}) => {
    const [showChart, setShowChart] = useState(false);

    const toggleShowChart = () => {
        setShowChart(!showChart);
    };

    return (
        <div className="Content__single-repo">
            <button onClick={toggleShowChart}>
                {reposDataSingleElement.name}
            </button>
            {showChart && (
                <RepoLanguagePolarChart
                    reposDataSingleElement={reposDataSingleElement}
                    repoLanguageData={repoLanguageData}
                />
            )}
        </div>
    );
};

export default RepoSingleCard;
