import React from "react";
import {Accordion, AccordionSummary, AccordionDetails, styled, Typography} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MuiAccordion = styled(Accordion)(() => ({
    border: '1px solid #e5e5e5',
    boxShadow: 'none',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const MuiAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: '#fafafa',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1.5),
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        marginLeft: theme.spacing(1.5),

    }
}));

const MuiAccordionDetails = styled(AccordionDetails)(({ theme }) => ({

}))

const CustomAccordion = ({ children, option }) => {
    return (
        <MuiAccordion square>
            <MuiAccordionSummary expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '0.9rem' }} /> } aria-controls='panel1d-content' id='panel1d-header'>
                <Typography>{option.title}</Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
                { children }
            </MuiAccordionDetails>
        </MuiAccordion>
    )
}

export default CustomAccordion;