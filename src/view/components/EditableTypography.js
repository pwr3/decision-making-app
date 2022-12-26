import React, { useState } from "react";
import { Typography, TextField, Stack, Button, Box } from "@mui/material";

const EditableTypography = ({ initTitle }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [title, setTitle] = useState(initTitle);
    const [hover, setHover] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setIsFocused(false);
        setHover(false);
        title || setTitle("Add description");
    };

    return (
        <>
            {!isFocused ? (
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                >
                    <Typography onClick={() => setIsFocused(true)}>
                        {title}
                    </Typography>
                    {hover && (
                        <Stack direction="row" spacing={0.5}>
                            <Button
                                variant="outlined"
                                disableElevation
                                sx={{ maxHeight: "22px" }}
                                onClick={() => setIsFocused(true)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="outlined"
                                disableElevation
                                sx={{ maxHeight: "22px" }}
                                onClick={() => {}}
                            >
                                Delete
                            </Button>
                        </Stack>
                    )}
                </Stack>
            ) : (
                <form onSubmit={handleChange}>
                    <TextField
                        fullWidth
                        autoFocus
                        value={title}
                        variant="outlined"
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={handleChange}
                    />
                </form>
            )}
        </>
    );
};

export default EditableTypography;
