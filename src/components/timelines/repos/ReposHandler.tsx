import { useEffect, useState } from "react";

import { getGHLanguages, getRepos } from "../../../../api";
import RepoSingleCard from "./RepoSingleCard";
import RepoLanguagePolarChart from "./RepoLanguagePolarChart";

const ReposHandler = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [reposData, setReposData] = useState([]);
    const [repoLanguageData, setRepoLanguageData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        console.log("ReposHandler Use Effect()");
        getRepos()
            .then((repos) => {
                setReposData(repos);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) return <p>Loading Repos</p>;
    return (
        <div className="Content__component">
            Repos
            <ul>
                {reposData.map((repoData: any) => {
                    return (
                        <li key={repoData.repo_id}>
                            <RepoSingleCard
                                repoData={repoData}
                                repoLanguageData={repoLanguageData}
                                setRepoLanguageData={setRepoLanguageData}
                            />
                        </li>
                    );
                })}
            </ul>
            <RepoLanguagePolarChart repoLanguageData={repoLanguageData} />
        </div>
    );
};

export default ReposHandler;
