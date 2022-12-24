import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { add } from "../../store/reasonsSlice";
import { Box, TextField } from "@mui/material";

const NewReason = ({ optionId, issueId }) => {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add({ title, optionId, issueId }));
        setTitle("");
    };
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    placeholder="Enter new reason..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </Box>
    );
};

const ReasonsList = ({ reasons }) => {
    return (
        <Box sx={{ py: 2 }}>
            {reasons.map((reason) => (
                <ReasonsRow reason={reason} key={reason.id} />
            ))}
        </Box>
    );
};

const ReasonsRow = ({ reason }) => {
    return <Box sx={{ py: 1 }}>- {reason.title}</Box>;
};

const Reasons = ({ optionId, issueId }) => {
    const reasons = useAppSelector((state) => state.reasons);
    const dispatch = useAppDispatch();
    const reasonsList = reasons.reasonsList.filter(
        (reason) => reason.optionId == optionId
    );

    return (
        <Box sx={{ px: 3, pb: 3 }}>
            <ReasonsList reasons={reasonsList[0].reasons} />
            <NewReason optionId={optionId} issueId={issueId} />
        </Box>
    );
};

export default Reasons;
