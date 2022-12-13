import React from "react";
import { useParams } from "react-router-dom";

const OptionsPage = () => {
    const { issue_id } = useParams();
    return(
        <>
            OPTIONS {issue_id}
        </>
    )
}

export default OptionsPage;