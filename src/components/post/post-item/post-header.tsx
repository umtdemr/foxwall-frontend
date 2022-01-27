import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import { GlobalUser } from "../../../types/global/user_types";
import timeDifference from "../../../modules/utils/relative_time";


interface PostHeaderProps {
  user: GlobalUser;
  createdAt: string;
}


const PostHeader: React.FC<PostHeaderProps> = ({ user, createdAt }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center">
      <Link to={`/profile/${user.username}`}>
        <Avatar
          sx={{ marginRight: "10px" }}
          src={user.profile.avatar}
        ></Avatar>
      </Link>
      <Stack direction="column">
        <Stack direction="row" alignItems="center">
          <Link to={`/profile/${user.username}`} style={{
            color: theme.palette.text.primary,
            textDecoration: "none",
          }}>
            <Typography variant="subtitle1" sx={{ marginRight: "5px" }}>
              {user.profile.name}
            </Typography>
          </Link>
          {
            user.profile.is_celebrity && <Avatar
              sx={{
                width: 16,
                height: 16,
                bgcolor: theme.palette.primary.main,
              }}
            >
            <CheckIcon sx={{ width: 12, height: 12 }} />
          </Avatar>
          }
        </Stack>
        <Typography variant="caption">{user.username} | { timeDifference(createdAt) }</Typography>
      </Stack>
    </Stack>
  );
};

export default PostHeader;
