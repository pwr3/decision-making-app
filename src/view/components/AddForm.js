import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

const AddForm = ({ formProps, handleCancel, payload }) => {
    const [title, setTitle] = useState("");
    const [reasonTypeId, setReasonTypeId] = useState("1");
    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        payload({ title, reasonTypeId });
    };
    return (
        <>
            {formProps ? (
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
                            autoFocus={formProps.textField.autoFocus}
                            sx={{ width: "100%" }}
                            placeholder={formProps.textField.placeholder}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Button
                            sx={{ px: 4 }}
                            type="submit"
                            variant={formProps.submitBtn.variant}
                            disableElevation
                        >
                            {formProps.submitBtn.name}
                        </Button>
                        {formProps.cancelBtn && (
                            <Button
                                sx={{ px: 4 }}
                                color="error"
                                variant="text"
                                disableElevation
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        )}
                    </Stack>
                    {formProps.radioGroup && (
                        <FormControl>
                            <Box sx={{ pt: 2 }}>
                                {/*<FormLabel id="reason-type-radio-buttons-group-label">*/}
                                {/*    Reason Type*/}
                                {/*</FormLabel>*/}
                                <RadioGroup
                                    onChange={(e) =>
                                        setReasonTypeId(e.target.value)
                                    }
                                    row
                                    aria-labelledby="reason-type-radio-buttons-group-label"
                                    defaultValue="1"
                                    value={reasonTypeId}
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio />}
                                        label="Positive"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio />}
                                        label="Negative"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio />}
                                        label="Unclear"
                                    />
                                </RadioGroup>
                            </Box>
                        </FormControl>
                    )}
                </form>
            ) : null}
        </>
    );
};

export default AddForm;
