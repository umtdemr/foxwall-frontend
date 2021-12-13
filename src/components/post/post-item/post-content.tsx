import React from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";


interface PostContentProps {
  text?: string;
  images?: {image: string}[];
}

const PostContent: React.FC<PostContentProps> = ({ text, images}) => {
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
            images.map(image => 
              <ImageListItem cols={2} rows={2}>
                <img src={image.image} />
              </ImageListItem>
            )
          }
      </ImageList>
      }
    </Box>
  );
};

export default PostContent;
