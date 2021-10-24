import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";


const PostContent: React.FC = () => {
  return (
    <Box mt={2}>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        officia expedita, omnis, molestiae sapiente earum minus eum temporibus
        et amet numquam. Dignissimos autem ad repellendus dicta tempora hic
        animi pariatur!
      </Typography>
      <ImageList variant="quilted" cols={4}>
        <ImageListItem cols={2} rows={2}>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
        </ImageListItem>
        <ImageListItem cols={1} rows={1}>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
        </ImageListItem>
        <ImageListItem cols={1} rows={1}>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
        </ImageListItem>
        <ImageListItem cols={2} rows={1}>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default PostContent;
