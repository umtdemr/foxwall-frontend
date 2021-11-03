import React from 'react'

import {
    Container,
    Grid,
} from "@mui/material";
import SideBar from '../sidebar/sidebar_component';
import HeadWithLogo from '../head/head-with-logo.component';


const Layout: React.FC = ({children}) => {
    return (
        <Container>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={6}>
                    <HeadWithLogo />
                    {children}
                </Grid>
                <Grid item xs={4}>
                    <SideBar />
                </Grid>
            </Grid>
        </Container>
    )
}


export default Layout;
