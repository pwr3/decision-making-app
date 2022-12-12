import React, {useEffect, useState} from "react";
import {Box, Spinner, Center, FormControl, Input} from "@chakra-ui/react";
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { createIssue, fetchIssues } from '../store/issuesSlice';

const NewIssue = () => {
    const [ title, setTitle ] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(createIssue(title));
    }
    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <Input
                        placeholder='Add new issue...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>
            </form>
        </Box>
    )
}

const IssuesList = ({issues}) => {
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
            {issue.id} {issue.title}
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
            <IssuesList issues={issues.issueList}/>
            <NewIssue />
        </>
    )
}

export default IssuesPage;