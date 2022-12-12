import React, {useEffect} from "react";
import {Box, Spinner, Center} from "@chakra-ui/react";
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { createIssue, fetchIssues } from '../store/issuesSlice';

const NewIssue = () => {
    return(
        <Box>
            new issue
        </Box>
    )
}

const IssueList = ({issues}) => {
    return(
        <Box>
            {issues.map((issue) => (<IssueRow issue={issue} key={issue.id} />))}
            issue list
        </Box>
    )
}

const IssueRow = ({issue}) => {
    return(
        <Box>
            {issue.title}
        </Box>
    )
}

const IssuesPage = () => {
    const issues = useAppSelector((state) => state.issues);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIssues());
    }, [issues.currentIssue]);

    return (
        <>
            {issues.loading && <Center p={16}><Spinner /></Center>}
            <IssueList issues={issues.issueList}/>
            <NewIssue />
        </>
    )
}

export default IssuesPage;