import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    styled,
    Typography,
    Stack,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MuiAccordion = styled(Accordion)(({ theme }) => ({
    border: "1px solid #e5e5e5",
    boxShadow: "none",
    // "&:not(:last-child)": {
    //     borderBottom: 0,
    // },
    "&:before": {
        display: "none",
    },
}));

const MuiAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: "#fafafa",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1.5),
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
        marginLeft: theme.spacing(1.5),
    },
}));

const MuiAccordionDetails = styled(AccordionDetails)(() => ({
    padding: 0,
    // paddingLeft: 0,
    // paddingTop: 0,
}));

const CustomAccordion = ({ children, option }) => {
    return (
        <MuiAccordion square>
            <MuiAccordionSummary
                expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.9rem" }} />}
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                <Stack
                    sx={{ width: "100%", backgroundColor: "red" }}
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Typography>{option.title}</Typography>
                    <Stack direction="row" spacing={2}>
                        <Box>One</Box>
                        <Box>Two</Box>
                    </Stack>
                </Stack>
            </MuiAccordionSummary>
            <MuiAccordionDetails>{children}</MuiAccordionDetails>
        </MuiAccordion>
    );
};

export default CustomAccordion;
