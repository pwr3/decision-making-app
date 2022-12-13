import React, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { createReason, fetchReasons } from '../../store/reasonsSlice';


const NewReason = () => {
    return (
        <>

        </>
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
    console.log(reason);
    return (
        <>
            <p>{reason.title}</p>
        </>
    )
}

const Reasons = ({ optionId }) => {
    const reasons = useAppSelector((state) => state.reasons);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchReasons(optionId));
    }, [])

    return (
        <>
            <ReasonsList reasons={reasons.reasonsList} />
            <p>{optionId}</p>
            <NewReason />
        </>
    )
}

export default Reasons;