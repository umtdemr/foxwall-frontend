import React from "react";

import { Container, Grid } from "@mui/material";
import SideBar from "../sidebar/sidebar_component";
import HeadWithLogo from "../head/head-with-logo.component";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6} xs={12}>
          <HeadWithLogo />
          {children}
        </Grid>
        <Grid item md={4} xs={12}>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
