import React from "react";
import { Outlet } from "react-router-dom";
import IssuesPage from "./IssuesPage";
import {Container, Stack, Box} from "@mui/material";



const Layout = () => {
    console.log('--> Layout')
    // const issues = useAppSelector((state) => state.issues);
    return(
        <div>
            <Container maxWidth='xl'>
                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='center'
                    alignItems='flex-start'>
                    <Box sx={{ width: '50%'}}>
                        <IssuesPage />
                    </Box>
                    <Box sx={{ width: '50%'}}>
                        <Outlet />
                    </Box>
                </Stack>
            </Container>
        </div>
    )
}

export default Layout;
