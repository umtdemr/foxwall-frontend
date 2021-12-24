import React from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";


interface PostContentProps {
  username: string;
  text?: string;
  images?: {image: string}[];
}

const PostContent: React.FC<PostContentProps> = ({ username, text, images}) => {
  return (
    <Box mt={2}>
      {
      text && <Typography variant="caption">
        {text}
      </Typography>
      }

      {
        images && <ImageList variant="quilted" cols={4}>
          {
            images.map((image, index) => (
              <ImageListItem cols={4/images.length} rows={2} key={index}>
                <img src={image.image} alt={username + "'s post"}/>
              </ImageListItem>
            ))
          }
      </ImageList>
      }
    </Box>
  );
};

export default PostContent;
