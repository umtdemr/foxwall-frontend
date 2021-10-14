import React from "react";

import { Avatar, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { deepOrange } from "@mui/material/colors";

const PostHeader = () => {
  return (
    <Stack direction="row">
      <Avatar
        sx={{ marginRight: "10px" }}
        src="https://www.pngrepo.com/png/9649/512/avatar.png"
      ></Avatar>
      <Stack direction="column">
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle1" sx={{ marginRight: "5px" }}>
            Ümit Demir
          </Typography>
          <Avatar
            sx={{
              width: 16,
              height: 16,
              bgcolor: deepOrange[400],
            }}
          >
            <CheckIcon sx={{ width: 12, height: 12 }} />
          </Avatar>
        </Stack>
        <Typography variant="caption">12 days ago</Typography>
      </Stack>
    </Stack>
  );
};

export default PostHeader;
