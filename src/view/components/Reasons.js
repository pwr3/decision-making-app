import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { createReason, fetchReasons } from '../../store/reasonsSlice';
import {FormControl, TextField} from "@mui/material";


const NewReason = ({optionId}) => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReason({title, optionId}))
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            {/*<FormControl >*/}
                <TextField
                    variant='outlined'
                    // label='Enter new reason'
                    placeholder='Enter new reason'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            {/*</FormControl>*/}
        </form>
    )

}

const ReasonsList = ({ reasons }) => {
    console.log('-', reasons)
    return (
        <>
            {reasons.map((reason) => <ReasonsRow reason={reason} key={reason.id} />)}
        </>
    )
}

const ReasonsRow = ({ reason }) => {
    return (
        <>
            <p>{reason.title}</p>
        </>
    )
}

const Reasons = ({ optionId }) => {
    const reasons = useAppSelector((state) => state.reasons);
    const dispatch = useAppDispatch();
    const reasonsList = reasons.reasonsList.filter((reason) => reason.optionId == optionId);
    // const reasonsList = reasons.reasonsList.map((reason) => {
    // let reasonsList = [];
    //     if (reason.optionId == optionId) {
    //         return {...reason}
    //     }
    // })
    // for(const reason of reasons.reasonsList) {
    //     if (reason.optionId == optionId) {
    //         reasonsList.push(reason.reasons[0])
    //     }
    // }
    useEffect(() => {
        // dispatch(fetchReasons(optionId));
    }, [])

    return (
        <>
            <ReasonsList reasons={reasonsList[0].reasons} />
            <NewReason optionId={optionId}/>
        </>
    )
}

export default Reasons;