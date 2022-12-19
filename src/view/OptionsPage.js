import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { useParams, useLocation } from "react-router-dom";
import { add, fetch } from "../store/optionsSlice";
import Reasons from "./components/Reasons";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    CircularProgress,
    Stack, TextField,
    Typography, Box
} from "@mui/material";


const NewOption = ({ issueId }) => {
    const [ title, setTitle ] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(add({title, issueId}))
    }
    return (
        <Box sx={{ py: 4 }}>
            <form onSubmit={handleSubmit}>
                <TextField sx={{ width: '100%' }}
                    variant='outlined'
                    placeholder='Add new option...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </Box>
    )
}


const OptionsList = ({options, issueId}) => {
    return (
        <>
            {options.map((option) => <OptionsRow option={option} issueId={issueId} key={option.id}/> )}
        </>
    )
}

const OptionsRow = ({option, issueId}) => {
    return (
        <>
            <Accordion elevation={1} TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
                    <Typography>{option.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Reasons optionId={option.id} issueId={issueId}/>
                </AccordionDetails>
            </Accordion>

        </>
    )
}

const OptionsPage = () => {
    console.log('--> OptionsPage')
    const options = useAppSelector((state) => state.options);
    const dispatch = useAppDispatch();
    const { issue_id } = useParams();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetch(issue_id));
    }, [location.pathname])

    return (
        <>
            {options.loading && <CircularProgress />}
            <h2>{options.issueData.title}</h2>
            <OptionsList options={options.optionsList} issueId={issue_id}/>
            <NewOption issueId={issue_id} />
        </>
    )
}

export default OptionsPage;