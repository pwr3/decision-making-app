import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import IssuesPage from "./IssuesPage";

const Layout = () => {
    return (
        <div>
            <Stack
                sx={{ mx: 6 }}
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Box sx={{ width: "45%", px: 2 }}>
                    <IssuesPage />
                </Box>
                <Box sx={{ width: "55%", px: 2 }}>
                    <Outlet />
                </Box>
            </Stack>
        </div>
    );
};

export default Layout;
