import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { useParams } from "react-router-dom";
import { createOption, fetchOptions } from "../store/optionsSlice";
import Reasons from "./components/Reasons";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CircularProgress,
    Skeleton,
    Typography
} from "@mui/material";
import {fetchReasons} from "../store/reasonsSlice";



const NewOption = ({ issueId }) => {
    const [ title, setTitle ] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(createOption({title, issueId}))
    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <>
                    <input
                        placeholder='Add new option...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </>
            </form>
        </Box>
    )
}


const OptionsList = ({options}) => {
    return (
        <>
            {options.map((option) => <OptionsRow option={option} key={option.id}/> )}
        </>
    )
}

const OptionsRow = ({option}) => {
    return (
        <>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{option.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Reasons optionId={option.id}/>
                </AccordionDetails>
            </Accordion>

        </>
    )
}

const OptionsPage = () => {
    const options = useAppSelector((state) => state.options);
    const dispatch = useAppDispatch();
    const { issue_id } = useParams();

    const optionIds = (options) => (options.map((option) => (option.id)))

    useEffect(() => {
        dispatch(fetchOptions(issue_id))
            .then((res) =>
                dispatch(fetchReasons(optionIds(res.payload.optionsList))));
    }, [])

    return (
        <>
            {options.loading && <CircularProgress />}
            <h2>{options.issueData.title}</h2>
            <OptionsList options={options.optionsList} />
            <NewOption issueId={issue_id} />
        </>
    )
}

export default OptionsPage;