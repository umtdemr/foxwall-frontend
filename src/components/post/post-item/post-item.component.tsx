import React from "react";
import { Box, Paper } from "@mui/material";

import PostHeader from "./post-header";
import PostAction from "./post-action";
import PostContent from "./post-content";
import { GlobalPost } from "../../../types/global/post_types";


interface PostProps {
  post: GlobalPost
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ padding: "10px" }}>
        <PostHeader user={post.user} createdAt={post.created_at} uuid={post.uuid} />
        <PostContent text={post.text} images={post.images} username={post.user.username}/>
        <PostAction num_likes={post.num_likes } uuid={post.uuid} is_i_liked={post.is_i_liked} />
      </Paper>
    </Box>
  );
};

export default Post;
