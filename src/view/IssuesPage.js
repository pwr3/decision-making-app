import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { createIssue, fetchIssues } from '../store/issuesSlice';
import {Box, Divider, List, ListItemButton, ListItemText, Chip, CircularProgress} from '@mui/material'
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

                    <input
                        placeholder='Add new issue...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

            </form>
        </Box>
    )
}

const IssuesList = ({issues}) => {
    return (
        <Box sx={{ border: 1, borderColor: 'grey.400' }}>
            <List>
                {issues.map((issue) => (<IssueRow issue={issue} key={issue.id} />))}
            </List>
        </Box>
    )
}

const IssueRow = ({issue}) => {
    return (
        <>
        <ListItemButton>
            <ListItemText>
                {issue.title}
            </ListItemText>
            <Chip label={issue.optionNum} size='small'/>
        </ListItemButton>
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
            {issues.loading && <CircularProgress />}
            <IssuesList issues={issues.issueList}/>
            <NewIssue />
        </>
    )
}

export default IssuesPage;