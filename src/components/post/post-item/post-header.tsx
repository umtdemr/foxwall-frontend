import React from "react";
import { Link } from "react-router-dom";

import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { RemoveCircle, Check } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
import { GlobalUser } from "../../../types/global/user_types";
import timeDifference from "../../../modules/utils/relative_time";
import { IAuthSlice } from "../../../redux/slices/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


interface PostHeaderProps {
  user: GlobalUser;
  createdAt: string;
}


const PostHeader: React.FC<PostHeaderProps> = ({ user, createdAt }) => {
  const theme = useTheme();
  const authUserState: IAuthSlice = useSelector((state: RootState) => state.auth);
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
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
              <Check sx={{ width: 12, height: 12 }} />
            </Avatar>
            }
          </Stack>
          <Typography variant="caption">{user.username} | { timeDifference(createdAt) }</Typography>
        </Stack>
      </Stack>
      {
        authUserState.user.username === user.username && <IconButton aria-label="delete" title="Delete post">
          <RemoveCircle />
        </IconButton>
      }
    </Stack>
  );
};

export default PostHeader;
