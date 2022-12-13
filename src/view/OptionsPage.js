import React, {useEffect, useState} from "react";
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { createOption, fetchOptions } from "../store/optionsSlice";
import {Box, FormControl, Input} from "@chakra-ui/react";

const NewOption = ({ issueId }) => {
    const [ title, setTitle ] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        dispatch(createOption({title, issueId}))
    }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <Input
                        placeholder='Add new option...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>
            </form>
        </Box>
    )
}


const OptionsList = ({options}) => {
    return (
        <Box>
            {options.map((option) => (<OptionsRow option={option} key={option.id} />))}
        </Box>
    )
}

const OptionsRow = ({option}) => {
    return (
        <Box>
            <>{option.title}</>
        </Box>
    )
}

const OptionsPage = () => {
    const options = useAppSelector((state) => state.options);
    const { issue_id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOptions(issue_id))
    }, [])

    return (
        <>
            OPTIONS {issue_id}
            <OptionsList options={options.optionsList} />
            <NewOption issueId={issue_id} />
        </>
    )
}

export default OptionsPage;