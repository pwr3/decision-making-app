import React from "react";
import { Outlet } from "react-router-dom";
import { ChakraProvider, Container, Box, HStack } from "@chakra-ui/react";


const Layout = () => {
    return(
        <ChakraProvider>
        <div>
            <Container maxW='container.lg' bg='green.400'>
                <HStack>
                    <Box bg='tomato' color='white'>
                        Yo, some text in da container ;]
                    </Box>
                    <Box bg='aliceblue' color='tomato'>
                        Yo, some text in da container ;]
                        <Outlet />
                    </Box>
                </HStack>
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