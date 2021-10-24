import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import PostHeader from "./post-header";
import PostAction from "./post-action";
import PostContent from "./post-content";

const Post: React.FC = () => {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: "10px" }}>
        <PostHeader />
        <PostContent />
        <PostAction />
      </Paper>
    </Box>
  );
};

export default Post;
