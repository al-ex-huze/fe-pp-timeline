// import { useEffect, useState } from "react";

// import { getLanguages } from "../../../../api";

// const LanguagesHandler = ({
//     setRepoLanguageData,
// }: {
//     repoLanguageData: any;
//     setRepoLanguageData: any;
// }) => {
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         console.log("LanguagesHandler Use Effect()");
//         getLanguages()
//             .then((languages) => {
//                 setRepoLanguageData(languages);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     if (isLoading) return <p>Loading Languages</p>;
//     return <div className="Content__component">LanguagesHandler</div>;
// };

// export default LanguagesHandler;
