// import { useState } from "react";
// import ReposHandler from "./ReposHandler";
// import LanguagesHandler from "./LanguagesHandler";
// import RepoSingleCard from "./RepoSingleCard";

// const ReposParent = () => {
//     const [reposData, setReposData] = useState([]);
//     const [repoLanguageData, setRepoLanguageData] = useState([]);

//     return (
//         <div className="Content__container">
//             ReposParent
//             <ReposHandler reposData={reposData} setReposData={setReposData} />
//             <LanguagesHandler
//                 repoLanguageData={repoLanguageData}
//                 setRepoLanguageData={setRepoLanguageData}
//             />
//                 <ul>
//                     {reposData.map((reposDataSingleElement: any) => {
//                         return (
//                             <li key={reposDataSingleElement.repo_id}>
//                                 <RepoSingleCard
//                                     reposDataSingleElement={
//                                         reposDataSingleElement
//                                     }
//                                     repoLanguageData={repoLanguageData}
//                                 />
//                             </li>
//                         );
//                     })}
//                 </ul>
//         </div>
//     );
// };

// export default ReposParent;
