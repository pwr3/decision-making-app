import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../hooks';
import { useParams } from "react-router-dom";
import { createOption, fetchOptions } from "../store/optionsSlice";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem, AccordionPanel,
    Box,
    Center,
    FormControl, Heading,
    Input,
    Spinner
} from "@chakra-ui/react";
import Reasons from "./components/Reasons";


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
            <Accordion>
                {options.map((option) => (<OptionsRow option={option} key={option.id} />))}
            </Accordion>
        </Box>
    )
}

const OptionsRow = ({option}) => {
    return (
        <AccordionItem>
            <AccordionButton>
                <AccordionIcon />
                <>{option.title}</>
            </AccordionButton>
            <AccordionPanel>
                <Reasons optionId={option.id}/>
            </AccordionPanel>
        </AccordionItem>
    )
}

const OptionsPage = () => {
    const options = useAppSelector((state) => state.options);
    const { issue_id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchOptions(issue_id))
    }, [])

    return (
        <>  {options.loading && <Center p={16}><Spinner /></Center>}
            <Heading as='h2' size='md'>{options.issueData.title}</Heading>
            <OptionsList options={options.optionsList} />
            <NewOption issueId={issue_id} />
        </>
    )
}

export default OptionsPage;