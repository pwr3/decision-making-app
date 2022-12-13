import React from "react";

const NewReason = () => {
    return (
        <>
            new reason
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
    return (
        <>
            {reason.title}
        </>
    )
}

const Reasons = () => {
    const reasons = [];
    return (
        <>
            <ReasonsList reasons={reasons} />
            <NewReason />
        </>
    )
}

export default Reasons;