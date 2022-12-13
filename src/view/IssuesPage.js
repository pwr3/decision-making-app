import React, { useEffect, useState } from "react";
import {Box, Spinner, Center, FormControl, Input, LinkBox, LinkOverlay, Divider} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { createIssue, fetchIssues } from '../store/issuesSlice';
import { useNavigate } from "react-router-dom";

const NewIssue = () => {
    const [ title, setTitle ] = useState('')
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(createIssue(title))
            .then((res) => navigate('/issues/'+ res.payload));
    }
    return (
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
    return (
        <Box>
            {issues.map((issue) => (<IssueRow issue={issue} key={issue.id} />))}
        </Box>
    )
}

const IssueRow = ({issue}) => {
    return (
        <>
        <LinkBox my={1} py={3} >
            <LinkOverlay href='#'>{issue.title}</LinkOverlay> {issue.optionNum}
        </LinkBox>
        <Divider />
        </>
    )
}

const IssuesPage = () => {
    const issues = useAppSelector((state) => state.issues);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchIssues());
    }, []);

    return (
        <>
            {issues.loading && <Center p={16}><Spinner /></Center>}
            <IssuesList issues={issues.issueList}/>
            <NewIssue />
        </>
    )
}

export default IssuesPage;