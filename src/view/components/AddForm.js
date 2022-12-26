import React, {useState} from "react";
import { Button, Stack, TextField, Typography} from "@mui/material";

const AddForm = ({formProps, payload}) => {
    const [title, setTitle] = useState("");
    // console.log('formProps', formProps.title)
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        payload(title)
    };
    return (
        <>
        { formProps ?
        <form onSubmit={handleSubmit}>
            <Typography
                sx={{ color: "#919191", my: 1 }}
                variant="caption"
                display="block"
                gutterBottom
            >
                {formProps.title}
            </Typography>
            <Stack direction="row" spacing={1}>
                <TextField
                    sx={{ width: "100%" }}
                    placeholder={formProps.textField.placeholder}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Button
                    sx={{ px: 5 }}
                    type="submit"
                    variant={formProps.submitBtnName.variant}
                    disableElevation
                >
                    {formProps.submitBtnName.name}
                </Button>
            </Stack>
        </form>
                : null
        }
        </>
    )
}

export default AddForm;