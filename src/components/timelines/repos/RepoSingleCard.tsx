import { useEffect, useState } from "react";

import { getGHLanguages } from "../../../../api";

const RepoSingleCard = ({
    repoData,
    repoLanguageData,
    setRepoLanguageData,
}: {
    repoData: any;
    repoLanguageData: any;
    setRepoLanguageData: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     console.log("RepoSingleCard Use Effect()");
    //     getGHLanguages(repoData.name)
    //         .then((repoLanguage) => {
    //             console.log(repoLanguageData)
    //             setRepoLanguageData([repoLanguage]);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    // getGHLanguages(repoData.name)
    //     .then((repoLanguage) => {
    //         console.log(repoData.name);

    //         console.log(repoLanguage);

    //         setIsLoading(false);
    //     })
    //     .catch((error) => {});

    const handleRepoSelect = () => {};

    if (isLoading) return <p>Loading Repo Language</p>;
    return (
        <div className="Content__component">
            <button onClick={handleRepoSelect}>{repoData.name}</button>
        </div>
    );
};

export default RepoSingleCard;
