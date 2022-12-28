import { Stack, Typography } from "@mui/material";
import { FcQuestions } from "react-icons/fc";
import React from "react";

const EmptyState = ({ name }) => {
    if (name === "option") {
        return (
            <Stack direction="row" spacing={2} sx={{ py: 4 }}>
                <FcQuestions
                    style={{
                        fontSize: "100px",
                        opacity: "0.2",
                        padding: ".7rem",
                    }}
                />
                <Stack>
                    <Typography sx={{ mt: 2 }} variant="h5" gutterBottom>
                        It looks like there are no {name}s that have been added.
                    </Typography>
                    <Typography>Add a new {name}.</Typography>
                </Stack>
            </Stack>
        );
    }

    if (name === "reason") {
        return (
            <Stack direction="row" spacing={2} sx={{ py: 4 }}>
                <FcQuestions
                    style={{
                        fontSize: "60px",
                        opacity: "0.2",
                        padding: ".7rem",
                    }}
                />
                <Stack>
                    <Typography sx={{ mt: 2 }} variant="h7" gutterBottom>
                        It looks like there are no {name}s that have been added.
                    </Typography>
                    <Typography>Add a new {name}.</Typography>
                </Stack>
            </Stack>
        );
    }

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: "300px", mt: "25px" }}
        >
            <FcQuestions
                style={{ fontSize: "150px", opacity: "0.2", padding: ".7rem" }}
            />
            <Typography
                sx={{ maxWidth: "400px", textAlign: "center" }}
                variant="h5"
                gutterBottom
            >
                It looks like there are no {name}s that have been added.
            </Typography>
            <Typography>Add a new {name}.</Typography>
        </Stack>
    );
};

export default EmptyState;
