import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useParams, useLocation } from "react-router-dom";
import { add, fetch } from "../store/optionsSlice";
import { CircularProgress, TextField, Box, Typography } from "@mui/material";
import CustomAccordion from "./components/CustomAccordion";
import Reasons from "./components/Reasons";

const NewOption = ({ issueId }) => {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        dispatch(add({ title, issueId }));
    };
    return (
        <Box sx={{ py: 4 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    placeholder="Add new option..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </Box>
    );
};

const OptionsList = ({ options, issueId }) => {
    return (
        <>
            {options.map((option) => (
                <OptionsRow option={option} issueId={issueId} key={option.id} />
            ))}
        </>
    );
};

const OptionsRow = ({ option, issueId }) => {
    return (
        <>
            <CustomAccordion option={option}>
                <Reasons optionId={option.id} issueId={issueId} />
            </CustomAccordion>
        </>
    );
};

const OptionsPage = () => {
    const options = useAppSelector((state) => state.options);
    const dispatch = useAppDispatch();
    const { issue_id } = useParams();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetch(issue_id));
    }, [location.pathname]);

    return (
        <>
            {options.loading && <CircularProgress />}
            <Box sx={{ py: 3, pl: 2 }}>
                <Typography variant="h5" component="h5">
                    {options.issueData.title}
                </Typography>
            </Box>
            <Box sx={{ pb: 2, pl: 2 }}>
                <Typography>Options:</Typography>
            </Box>
            <OptionsList options={options.optionsList} issueId={issue_id} />
            <NewOption issueId={issue_id} />
        </>
    );
};

export default OptionsPage;
