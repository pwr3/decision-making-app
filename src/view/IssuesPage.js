import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { add, fetch } from "../store/issuesSlice";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomList from "./components/CustomList";
import AddForm from "./components/AddForm";
import { issuesFormProps } from "../helpers/formProps";

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
                    <Box sx={{ py: 3 }}>
                        <AddForm
                            formProps={issuesFormProps}
                            payload={(payload) => dispatch(add(payload))}
                        />
                    </Box>
                </>
            )}
        </>
    );
};

export default IssuesPage;
