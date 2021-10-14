import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import AddPostForm from "../../components/add-post/form/form.component";
import HeadWithLogo from "../../components/head/head-with-logo.component";

import SideBar from "../../components/sidebar/sidebar_component";
import Post from "../../components/post-item/post-item.component";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6}>
            <HeadWithLogo />
            <AddPostForm />
            <Post />
          </Grid>
          <Grid item xs={4}>
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
