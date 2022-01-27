import React, { useState } from "react";

import { Stack, IconButton, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useAuthenticatedAPI } from "../../../modules/api/api";

interface PostActionProps {
  num_likes: number;
  uuid: string;
  is_i_liked: boolean;
}

const PostAction: React.FC<PostActionProps> = ({ num_likes, uuid, is_i_liked }) => {
  const [liked, setLiked] = useState(is_i_liked);
  const [localNumLikes, setLocalNumLikes] = useState(num_likes);
  const theme = useTheme();
  const API = useAuthenticatedAPI();

  const handleLike = async () => {
    const response = await API.post(`/like/action/`, { uuid })
    if (response.status === 201) {
      setLiked(true);
      setLocalNumLikes(localNumLikes + 1);
    }
    else if (response.status === 200) {
      setLiked(false);
      setLocalNumLikes(localNumLikes - 1);
    }
  };

  return (
    <Stack mt={2} direction="row" justifyContent="flex-end" alignItems="center">
      <IconButton sx={{ alignSelf: "end" }} onClick={() => handleLike()}>
        {liked ? (
          <Favorite
            sx={{
              fill: theme.palette.primary.main,
            }}
          />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>
      <Typography variant="subtitle2">{localNumLikes} likes </Typography>
    </Stack>
  );
};

export default PostAction;
