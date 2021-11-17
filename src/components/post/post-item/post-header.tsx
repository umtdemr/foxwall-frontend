import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";


const PostHeader: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center">
      <Link to="/profile/username">
        <Avatar
          sx={{ marginRight: "10px" }}
          src="https://www.pngrepo.com/png/9649/512/avatar.png"
        ></Avatar>
      </Link>
      <Stack direction="column">
        <Stack direction="row" alignItems="center">
          <Link to="/profile/qwe" style={{
            color: theme.palette.text.primary,
            textDecoration: "none",
          }}>
            <Typography variant="subtitle1" sx={{ marginRight: "5px" }}>
              Ümit Demir
            </Typography>
          </Link>
          <Avatar
            sx={{
              width: 16,
              height: 16,
              bgcolor: theme.palette.primary.main,
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
