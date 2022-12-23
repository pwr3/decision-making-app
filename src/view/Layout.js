import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import IssuesPage from "./IssuesPage";

const Layout = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            {(location.pathname === '/') ? <Stack
                sx={{ mx: 6 }}
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Box sx={{ width: "55%", px: 2 }}>
                    <IssuesPage />
                </Box>
            </Stack> :
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
            </Stack> }
        </div>
    );
};

export default Layout;
