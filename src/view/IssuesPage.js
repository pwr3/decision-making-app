import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { add, fetch } from '../store/issuesSlice';
import { Box, Divider, List, ListItemButton,
    ListItemText, Chip, CircularProgress,
    TextField } from '@mui/material'
import {NavLink, useNavigate} from "react-router-dom";

const NewIssue = () => {
    const [ title, setTitle ] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(add(title));
    }
    return (
        <form onSubmit={handleSubmit}>
                <TextField
                    placeholder='Add new issue...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
        </form>
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
            <NavLink to={'/issues/'+issue.id}>
                <ListItemButton>
                    <ListItemText>
                        {issue.title}
                    </ListItemText>
                    <Chip label={issue.optionNum} size='small'/>
                </ListItemButton>
            </NavLink>
        <Divider />
        </>
    )
}

const IssuesPage = () => {
    console.log('--> IssuesPage')
    const navigate = useNavigate();
    const issues = useAppSelector((state) => state.issues);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetch());
        issues.newIssueId && navigate('/issues/'+ issues.newIssueId);
    }, [issues.newIssueId]);

    return (
        <>
            {issues.loading && <CircularProgress />}
            <IssuesList issues={issues.issueList}/>
            <NewIssue />
        </>
    )
}

export default IssuesPage;