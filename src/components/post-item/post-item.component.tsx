import React from "react";
import { Box, Paper } from "@mui/material";

import PostHeader from "./post-header";

const Post = () => {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: "10px" }}>
        <PostHeader />
      </Paper>
    </Box>
  );
};

export default Post;
