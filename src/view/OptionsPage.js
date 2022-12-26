import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useParams, useLocation } from "react-router-dom";
import { add, fetch } from "../store/optionsSlice";
import {
    CircularProgress,
    Box,
    Typography,
    Stack,
    IconButton,
} from "@mui/material";
import CustomAccordion from "./components/CustomAccordion";
import Reasons from "./components/Reasons";
import EditableTypography from "./components/EditableTypography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddForm from "./components/AddForm";
import { optionsFormProps } from "../helpers/formProps";

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
            {options.loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Box sx={{ pt: 2, pb: 1, pl: 2 }}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="h5" component="h5">
                                📌 {options.issueData.title}
                            </Typography>
                            <IconButton
                                aria-label="more"
                                size="large"
                                color="#ffffff"
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Stack>

                        <Typography sx={{ mt: 1 }} variant="body2" gutterBottom>
                            {options.issueData.description ||
                                "Add description of this issue"}
                        </Typography>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            Goals: + add goal
                        </Typography>
                    </Box>
                    <Box sx={{ pb: 2, pl: 2 }}>
                        <Typography variant="h6" component="h6">
                            Options:
                        </Typography>
                    </Box>
                    <OptionsList
                        options={options.optionsList}
                        issueId={issue_id}
                    />
                    <Box sx={{ py: 3 }}>
                        <AddForm
                            formProps={optionsFormProps}
                            payload={(payload) =>
                                dispatch(
                                    add({ title: payload, issueId: issue_id })
                                )
                            }
                        />
                    </Box>
                </>
            )}
        </>
    );
};

export default OptionsPage;
