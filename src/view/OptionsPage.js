import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { useParams, useLocation } from "react-router-dom";
import { add, fetch } from "../store/optionsSlice";
import Reasons from "./components/Reasons";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CircularProgress,
    Stack, TextField,
    Typography
} from "@mui/material";
import {fetchReasons} from "../store/reasonsSlice";



const NewOption = ({ issueId }) => {
    const [ title, setTitle ] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(add({title, issueId}))
    }
    return (
        <form onSubmit={handleSubmit}>
            <>
                <TextField
                    variant='outlined'
                    placeholder='Add new option...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </>
        </form>
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
                <AccordionSummary xs={{color: 'green'}} aria-controls="panel1d-content" id="panel1d-header">
                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='center'
                        alignItems='flex-start'>
                        <Typography>{option.title}</Typography>
                        {/*<Typography>sssss</Typography>*/}
                        {/*<Typography>nnnn</Typography>*/}
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Reasons optionId={option.id}/>
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

    // const optionIds = (options) => (options.map((option) => (option.id)))

    useEffect(() => {
        dispatch(fetch(issue_id));
            // .then((res) =>
            //     dispatch(fetchReasons(optionIds(res.payload.optionsList))));
    }, [location.pathname])

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