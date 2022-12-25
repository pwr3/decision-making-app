import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { add, fetch } from "../store/issuesSlice";
import {
    Box, Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomList from "./components/CustomList";

const NewIssue = () => {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        dispatch(add(title));
    };
    return (
        <Box sx={{ py: 4 }}>
            <form onSubmit={handleSubmit}>
                <Typography sx={{ color: '#919191', my: 1}} variant="caption" display="block" gutterBottom>
                    Please provide your issue title
                </Typography>
                <Stack direction='row' spacing={1}>
                    <TextField
                        sx={{ width: "100%" }}
                        placeholder="Add new issue..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button sx={{ px: 5 }} type='submit' variant="contained" disableElevation>Add</Button>
                </Stack>

            </form>

        </Box>
    );
};

const IssuesList = ({ issues }) => {
    return <CustomList issues={issues} />;
};

const IssuesPage = () => {
    const navigate = useNavigate();
    const issues = useAppSelector((state) => state.issues);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetch());
        issues.newIssueId && navigate("/issues/" + issues.newIssueId);
    }, [issues.newIssueId]);
    return (
        <>
            {issues.loading ? (
                <Stack justifyContent="center" alignItems="center">
                    <CircularProgress sx={{ align: "center" }} />
                </Stack>
            ) : (
                <>
                    <Box sx={{ py: 3, pl: 2 }}>
                        <Typography variant="h5" component="h5">
                            ISSUES 🙄
                        </Typography>
                    </Box>
                    <IssuesList issues={issues.issueList} />
                    <NewIssue />
                </>
            )}
        </>
    );
};

export default IssuesPage;
