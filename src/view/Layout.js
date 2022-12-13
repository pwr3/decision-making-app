import React from "react";
import { Outlet } from "react-router-dom";
import { ChakraProvider, Container, Box, Flex } from "@chakra-ui/react";
import IssuesPage from "./IssuesPage";


const Layout = () => {
    return(
        <ChakraProvider>
        <div>
            <Container maxW='container.lg'>
                <Flex>
                    <Box w='50%' border='1px' p={6}>
                        <IssuesPage />
                    </Box>
                    <Box w='50%' border='1px' p={6}>
                        <Outlet />
                    </Box>
                </Flex>
            </Container>
        </div>
        </ChakraProvider>
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