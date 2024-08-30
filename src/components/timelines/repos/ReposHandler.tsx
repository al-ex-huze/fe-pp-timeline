import { useEffect, useState } from "react";

import { getRepos } from "../../../../api";

const ReposHandler = ({
    setReposData,
}: {
    reposData: any;
    setReposData: any;
}) => {
    const [isLoading, setIsLoading] = useState(false);

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
    return <div className="Content__component">Repos</div>;
};

export default ReposHandler;
