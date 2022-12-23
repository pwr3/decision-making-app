import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import IssuesPage from "./IssuesPage";

const Layout = () => {
    const location = useLocation();
    let issuesPanel = { width: "45%", px: 2 };
    let optionsPanel = { width: "55%", px: 2 };

    if (location.pathname === "/") {
        issuesPanel.width = "55%";
        optionsPanel = { display: "none" };
    }

    return (
        <div>
            <Stack
                sx={{ mx: 6 }}
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Box sx={issuesPanel}>
                    <IssuesPage />
                </Box>
                <Box sx={optionsPanel}>
                    <Outlet />
                </Box>
            </Stack>
        </div>
    );
};

export default Layout;
