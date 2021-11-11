import React, { useState } from "react";

import { Stack, IconButton, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const PostAction: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const theme = useTheme();

  const handleLike = () => {};
  return (
    <Stack mt={2} direction="row" justifyContent="flex-end" alignItems="center">
      <IconButton sx={{ alignSelf: "end" }} onClick={() => setLiked(!liked)}>
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
      <Typography variant="subtitle2">123 likes </Typography>
    </Stack>
  );
};

export default PostAction;
