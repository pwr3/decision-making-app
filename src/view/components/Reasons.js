import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { add, fetch } from '../../store/reasonsSlice';
import {Box, TextField, Typography} from "@mui/material";


const NewReason = ({optionId, issueId}) => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add({title, optionId, issueId}))
        setTitle('');
    }
    return (
        <Box xs={{ p: 20 }}>
        <form onSubmit={handleSubmit}>
            {/*<FormControl >*/}
                <TextField xs={{ width: '100%'}}
                    variant='outlined'
                    // label='Enter new reason'
                    placeholder='Enter new reason...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            {/*</FormControl>*/}
        </form>
        </Box>
    )

}

const ReasonsList = ({ reasons }) => {
    return (
        <>
            {reasons.map((reason) => <ReasonsRow reason={reason} key={reason.id} />)}
        </>
    )
}

const ReasonsRow = ({ reason }) => {
    return (
        <>
            <p>- {reason.title}</p>
        </>
    )
}

const Reasons = ({ optionId, issueId }) => {
    const reasons = useAppSelector((state) => state.reasons);
    const dispatch = useAppDispatch();
    const reasonsList = reasons.reasonsList.filter((reason) => reason.optionId == optionId);

    return (
        <Box>
            <ReasonsList reasons={reasonsList[0].reasons} />
            <NewReason optionId={optionId} issueId={issueId}/>
        </Box>
    )
}

export default Reasons;