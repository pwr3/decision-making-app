import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { add } from "../../store/reasonsSlice";
import { Box, Stack, Typography } from "@mui/material";
import EditableTypography from "./EditableTypography";
import ExpandedAddForm from "./ExpandedAddForm";
import EmptyState from "./EmptyState";

const ReasonsList = ({ reasons }) => {
    return (
        <Box sx={{ pb: 2 }}>
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
            <Box sx={{ width: "100%" }}>
                <EditableTypography initTitle={reason.title} />
            </Box>
        </Stack>
    );
};

const Reasons = ({ optionId, issueId }) => {
    const reasons = useAppSelector((state) => state.reasons);
    const dispatch = useAppDispatch();
    const reasonsList = reasons.reasonsList.filter(
        (reason) => reason.optionId == optionId
    );

    return (
        <Box sx={{ px: 3, pb: 3 }}>
            {reasonsList[0].reasons.length === 0 ? (
                <>
                    <EmptyState name={"reason"} />
                </>
            ) : (
                <>
                    <Typography sx={{ py: 2 }}>Reasons:</Typography>
                    <ReasonsList reasons={reasonsList[0].reasons} />
                </>
            )}

            <ExpandedAddForm
                payload={({ title, reasonTypeId }) =>
                    dispatch(add({ title, optionId, issueId, reasonTypeId }))
                }
            />
        </Box>
    );
};

export default Reasons;
