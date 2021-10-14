import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import PostHeader from "./post-header";
import PostAction from "./post-action";

const Post = () => {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: "10px" }}>
        <PostHeader />
        <Box mt={2}>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            officia expedita, omnis, molestiae sapiente earum minus eum
            temporibus et amet numquam. Dignissimos autem ad repellendus dicta
            tempora hic animi pariatur!
          </Typography>
        </Box>
        <PostAction />
      </Paper>
    </Box>
  );
};

export default Post;
