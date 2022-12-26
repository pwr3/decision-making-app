import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { add } from "../../store/reasonsSlice";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import EditableTypography from "./EditableTypography";

const NewReason = ({ optionId, issueId }) => {
    const [title, setTitle] = useState("");
    const [reasonTypeId, seReasonTypeId] = useState("1");
    const dispatch = useAppDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add({ title, optionId, issueId, reasonTypeId }));
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
                <FormControl>
                    <Box sx={{ pt: 2 }}>
                        <FormLabel id="reason-type-radio-buttons-group-label">
                            Reason Type
                        </FormLabel>
                        <RadioGroup
                            onChange={(e) => seReasonTypeId(e.target.value)}
                            row
                            aria-labelledby="reason-type-radio-buttons-group-label"
                            defaultValue="1"
                            value={reasonTypeId}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="Positive"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="Negative"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="Unclear"
                            />
                        </RadioGroup>
                    </Box>
                </FormControl>
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

const reasonTypeSign = (typeId) => {
    if (typeId === "1") {
        return "👍";
    } else if (typeId === "2") {
        return "❌";
    } else if (typeId === "3") {
        return "❔";
    }
};
const ReasonsRow = ({ reason }) => {
    return (
        <Stack direction="row" spacing={1} sx={{ pb: 1 }}>
            <Box sx={{ width: 22, textAlign: "center" }}>
                {reasonTypeSign(reason.reason_type_id)}
            </Box>
            <Box sx={{ width: '100%'}}>
                <EditableTypography initTitle={reason.title}/>
                {/*<Typography>{reason.title}</Typography>*/}
            </Box>
        </Stack>
    );
};

const Reasons = ({ optionId, issueId }) => {
    const reasons = useAppSelector((state) => state.reasons);
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
