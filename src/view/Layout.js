import React from "react";
import { Outlet } from "react-router-dom";
import IssuesPage from "./IssuesPage";
import { Stack, Box } from "@mui/material";



const Layout = () => {
    console.log('--> Layout')
    return(
        <div>
            <Stack
                direction='row'
                justifyContent='center'
                alignItems='flex-start'>
                <Box sx={{ width: '50%'}}>
                    <IssuesPage />
                </Box>
                <Box sx={{ width: '50%',  px: 4,}}>
                    <Outlet />
                </Box>
            </Stack>
        </div>
    )
}

export default Layout;
