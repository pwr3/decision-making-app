import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            layout yo, ne branch
            <Outlet />
        </div>
    )
}

export default Layout;

//
// import { useAppSelector } from './hooks';
// import { useDispatch } from 'react-redux';
// import { createIssue, fetchIssues } from './store/issuesSlice';
//
//
// const issues = useAppSelector((state) => state.issues);
//
// useEffect(() => {
//     dispatch(fetchIssues());
// }, [issues.currentIssue]);
//
// const dispatch = useDispatch();
// console.log(issues);
//
//
//
// <div>
//     App
//     <br />
//     <br />
//     {issues.issueList.map((issue) => {
//         return (
//             <p>
//                 {issue.id} {issue.title} {issue.optionNum}
//             </p>
//         );
//     })}
//     <br />
//     <button onClick={() => dispatch(fetchIssues())}>Get</button>
//     <button
//         onClick={() =>
//             dispatch(createIssue()).then(() => dispatch(fetchIssues()))
//         }
//     >
//         ADD
//     </button>
// </div>