import React, { useState } from "react";
import { Button } from "@mui/material";
import AddForm from "./AddForm";
import AddIcon from "@mui/icons-material/Add";
import { reasonsFormProps } from "../../helpers/formProps";

const ExpandedAddForm = ({ payload }) => {
    const [isFocused, setIsFocused] = useState(false);
    // const [title, setTitle] = useState(initTitle);
    // const [hover, setHover] = useState(false);

    return (
        <>
            {!isFocused ? (
                <Button
                    startIcon={<AddIcon />}
                    variant="outlined"
                    disableElevation
                    onClick={() => setIsFocused(true)}
                >
                    Add Reason
                </Button>
            ) : (
                <AddForm
                    formProps={reasonsFormProps}
                    handleCancel={() => setIsFocused(false)}
                    payload={payload}
                />
            )}
        </>
    );
};

export default ExpandedAddForm;
