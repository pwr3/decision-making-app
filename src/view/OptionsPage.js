import React from "react";
import { useParams } from "react-router-dom";

const OptionsList = ({options}) => {
    return (
        <>
            {options.map((option) => (<OptionsRow option={option} key={option.id} />))}

        </>
    )
}

const OptionsRow = ({option}) => {
    return (
        <>{option.title}</>
    )
}

const OptionsPage = () => {
    const { issue_id } = useParams();
    return (
        <>
            OPTIONS {issue_id}
            <OptionsList options={options} />
        </>
    )
}

export default OptionsPage;