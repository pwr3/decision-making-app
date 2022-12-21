import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { add, fetch } from '../store/issuesSlice';
import {
    Box, Divider, List, ListItemButton,
    ListItemText, Chip, CircularProgress, Stack,
    TextField, Typography
} from '@mui/material'
import { useNavigate } from "react-router-dom";
import CustomList from "./components/CustomList";

const NewIssue = () => {
    const [ title, setTitle ] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(add(title));
    }
    return (
        <Box sx={{ py: 4 }}>
            <form onSubmit={handleSubmit}>
                    <TextField sx={{ width: '100%' }}
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
        <CustomList issues={issues} />
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
            { issues.loading ?
                <Stack
                    justifyContent="center"
                    alignItems="center" >
                    <CircularProgress sx={{ align: 'center' }} />
                </Stack> :
                <>
                    <Box sx={{ py: 3, pl: 2 }}>
                        <Typography variant='h5' component='h5'>ISSUES 🙄</Typography>
                    </Box>
                    <IssuesList issues={issues.issueList}/>
                    <NewIssue />
                </>
            }
        </>
    )
}

export default IssuesPage;